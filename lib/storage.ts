'use client'

import { supabase } from '@/lib/supabase'

export interface UploadResult {
  url: string
  path: string
}

class StorageService {
  private supabaseClient = supabase
  private bucketName = 'blog-images'

  // Upload cover image
  async uploadCoverImage(file: File, postSlug: string): Promise<UploadResult> {
    if (!postSlug || postSlug.trim() === '') {
      throw new Error('Post slug is required for image upload. Please enter a title first to generate a slug.')
    }
    
    const fileExt = file.name.split('.').pop()
    const fileName = `covers/${postSlug}-cover.${fileExt}`
    
    return this.uploadFile(file, fileName)
  }

  // Upload content image
  async uploadContentImage(file: File, postSlug: string): Promise<UploadResult> {
    if (!postSlug || postSlug.trim() === '') {
      throw new Error('Post slug is required for image upload. Please enter a title first to generate a slug.')
    }
    
    const fileExt = file.name.split('.').pop()
    const timestamp = Date.now()
    const fileName = `content/${postSlug}-${timestamp}.${fileExt}`
    
    return this.uploadFile(file, fileName)
  }

  // Generic file upload method
  private async uploadFile(file: File, path: string): Promise<UploadResult> {
    // Validate file type
    if (!this.isValidImageType(file.type)) {
      throw new Error('Invalid file type. Only JPEG, PNG, WebP, and GIF images are allowed.')
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File size too large. Maximum size is 5MB.')
    }

    // Check authentication status
    const { data: { user }, error: authError } = await this.supabaseClient.auth.getUser()
    console.log('Upload attempt - User:', user?.id, 'Auth error:', authError)
    
    if (!user) {
      throw new Error('User not authenticated. Please log in to upload images.')
    }

    console.log('Attempting to upload to path:', path, 'in bucket:', this.bucketName)

    const { data, error } = await this.supabaseClient.storage
      .from(this.bucketName)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) {
      console.error('Storage upload error details:', {
        message: error.message,
        error: error
      })
      throw new Error(`Failed to upload image: ${error.message}`)
    }

    const { data: { publicUrl } } = this.supabaseClient.storage
      .from(this.bucketName)
      .getPublicUrl(data.path)

    return {
      url: publicUrl,
      path: data.path
    }
  }

  // Delete image
  async deleteImage(path: string): Promise<void> {
    const { error } = await this.supabaseClient.storage
      .from(this.bucketName)
      .remove([path])

    if (error) {
      throw new Error(`Failed to delete image: ${error.message}`)
    }
  }

  // Get public URL for an image
  getPublicUrl(path: string): string {
    const { data } = this.supabaseClient.storage
      .from(this.bucketName)
      .getPublicUrl(path)

    return data.publicUrl
  }

  // Validate image file type
  private isValidImageType(mimeType: string): boolean {
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/gif'
    ]
    return validTypes.includes(mimeType)
  }

  // Generate optimized image URL with transformations
  getOptimizedImageUrl(path: string, options?: {
    width?: number
    height?: number
    quality?: number
  }): string {
    const baseUrl = this.getPublicUrl(path)
    
    if (!options) return baseUrl

    const params = new URLSearchParams()
    if (options.width) params.append('width', options.width.toString())
    if (options.height) params.append('height', options.height.toString())
    if (options.quality) params.append('quality', options.quality.toString())

    return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl
  }
}

export const storageService = new StorageService()
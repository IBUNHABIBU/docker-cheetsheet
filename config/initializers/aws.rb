require 'aws-sdk-s3'

Aws.config.update({
  region: 'us-east-2',
  credentials: Aws::Credentials.new(Rails.application.credentials.dig(:aws, :access_key_id), Rails.application.credentials.dig(:aws, :access_key_id)),
})

S3_BUCKET = Aws::S3::Resource.new.bucket('rails-api-images')
require 'aws-sdk-s3'

Aws.config.update({
  region: 'us-east-2',
  credentials: Aws::Credentials.new('access_key_id', 'secret_access_key'),
})

S3_BUCKET = Aws::S3::Resource.new.bucket('rails-api-images')
resource "aws_s3_bucket" "bucketdev" {
  bucket        = var.aws_bucket_name
  force_destroy = true
  tags = {
    Environment = var.env
  }
}
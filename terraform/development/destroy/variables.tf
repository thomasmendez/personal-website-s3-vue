variable "env" {
  description = "Environment"
  type        = string
  default     = "dev"
}
variable "aws_bucket_name" {
  description = "S3 Bucket Name"
  type        = string
}
variable "domain" {
  description = "Domain Name"
  type        = string
  default     = "thomasamendez.com"
}
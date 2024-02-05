I successfully completed the AWS Cloud Resume Challenge by creating a professional resume website. The resume is coded in HTML and styled using CSS. The static website is deployed on Amazon S3, ensuring secure access through HTTPS via Amazon CloudFront. I configured a custom DNS domain name using Amazon Route 53, allowing visitors to access my resume.

To enhance interactivity, I implemented a visitor counter on the webpage using JavaScript. The counter's data is managed in an Amazon DynamoDB database, accessed through a secure API built with AWS API Gateway and Lambda functions. I followed best practices by using on-demand pricing for DynamoDB to keep costs minimal.

For streamlined development and updates, I employed continuous integration and deployment (CI/CD) using GitHub. Two separate repositories were created for the front-end and back-end code. GitHub Actions were configured to automatically update the S3 bucket upon pushing new website code, ensuring a seamless and secure deployment process. Importantly, no AWS credentials were committed to source control to maintain security.

Have currently Deactivated the site. due to server maintainence issues..!!

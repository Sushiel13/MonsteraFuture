pipeline {
    agent any

    environment {
        // Replace with your EC2 instance details
        EC2_USER = 'ubuntu'
        EC2_IP = '13.127.123.241'
        REMOTE_DIR = '/var/www/html'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone your GitHub repository
                git branch: 'main', url: 'https://github.com/Sushiel13/MonsteraFuture'
            }
        }
        
        stage('Transfer Files to EC2') {
            steps {
                // Secure copy files to EC2
                sh '''
                scp -o StrictHostKeyChecking=no -r * ${EC2_USER}@${EC2_IP}:${REMOTE_DIR}
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}

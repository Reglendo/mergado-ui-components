node {
    checkout scm
    skip_build = sh (script: "git log -1 | grep '\\[ci skip\\]'", returnStatus: true)
    if(skip_build != 0) {
        try {
            pipeline {
                agent {
                    docker {
                        image 'reglendo/tests-container'
                        args '-v /opt/docker-caches/.composer:/home/jenkins/.composer -v /opt/docker-caches/.npm:/home/jenkins/.npm -v /opt/docker-caches/.cache/yarn:/home/jenkins/.cache/yarn'
                    }
                }
                environment {
                    APP_ENV = 'docker'
                }
                stages {
                    stage("test jenkins") {
                        steps {
                            echo "TESTS"
                            echo sh(returnStdout: true, script: 'env')
                            sh '#false'
                        }
                    }
                    stage("prepare Jenkins") {
                        steps {
                            sh 'pwd'
                            echo 'Preparing deploy keys'
                            sh 'mkdir /home/jenkins/.ssh'
                            sh 'chown jenkins:jenkins /home/jenkins/.ssh'
                            sh 'chmod 0700 /home/jenkins/.ssh'
                            withCredentials([file(credentialsId: 'id_rsa-reglendobot', variable: 'DEPLOYKEY_PRIVATE')]) {
                                sh 'echo "$DEPLOYKEY_PRIVATE"'
                                sh 'cp $DEPLOYKEY_PRIVATE /home/jenkins/.ssh/id_rsa'
                                sh 'chown jenkins:jenkins /home/jenkins/.ssh/id_rsa'
                                sh 'chmod 0600 /home/jenkins/.ssh/id_rsa'
                            }
                            sh 'git config --global user.email "ping@reglendo.com"'
                            sh 'git config --global user.name "Jenkins"'
                            sh 'echo "Host github.com\n\tStrictHostKeyChecking no\n" >> /home/jenkins/.ssh/config'
                        }
                    }
                    stage("clean") {
                        steps {
                            echo 'Removing node_modules'
                            sh 'rm -rf node_modules'
                        }
                    }
                    stage("prepare") {
                        steps {
                            echo 'Yarn install'
                            sh 'yarn'
                        }
                    }
                    stage("build") {
                        steps {
                            sh 'npm run build-prod'
                        }
                    }
                    stage("test") {
                        steps {
                            sh 'npm run test test/**/*'
                        }
                    }
                    if(env.BRANCH_NAME == 'master') {
                        stage("publishing") {
                            steps {
                                echo 'Commit'
                                sh 'git stash'
                                sh 'git fetch --all'
                                sh 'git reset --hard'
                                sh 'git checkout -f master'
                                sh 'git pull -f origin master'
                                sh 'git checkout stash -- . || echo "Unstash failed. There is probably nothing stashed."'
                                sh 'git add --all www/*'
                                sh 'git commit -m "js+css build [ci skip]" || echo "Commit failed. There is probably nothing to commit."'
                                sh 'git push'

                                echo 'Publish'
                                sh 'npm publish'

                                commit_msg = sh(script: "git log -2", returnStdout: true)
                                slackSend channel: '#reglendo_devs', color: 'good', message: "Mergado-UI-kit published - *${env.JOB_NAME}* [${env.BUILD_NUMBER}] ${env.BUILD_URL}\n${commit_msg}", teamDomain: 'mergado', token: 'hGX8um8R0miKaAOedZyX7GvC'
                            }
                        }
                    }
                    stage('cleanup') {
                        steps {
                            deleteDir()
                        }
                    }
                }
            }
        } catch (error) {
            currentBuild.result = "FAILED"
            sh '#sleep 1 HOURS'
            throw error
        } finally {

        }
    } else {
        pipeline {
            agent any
            stages {
                stage("prepare Jenkins") {
                    steps {
                        echo "Build skipped - automatic build"
                    }
                }
            }
        }
    }
}

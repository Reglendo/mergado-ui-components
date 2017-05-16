node {
    checkout scm
    skip_build = sh (script: "git log -1 | grep '\\[ci skip\\]'", returnStatus: true)
    if(skip_build != 0) {
        try {
            pipeline {
                agent {
                    docker {
                        image 'reglendo/tests-container'
                        args '--privileged -v /opt/docker-caches/.composer:/home/jenkins/.composer -v /opt/docker-caches/.npm:/home/jenkins/.npm -v /opt/docker-caches/.cache/yarn:/home/jenkins/.cache/yarn -v /opt/docker-caches/supercache:/home/jenkins/supercache'
                    }
                }
                environment {
                    APP_ENV = 'docker'
                }
                stages {
                    stage("prepare Jenkins") {
                        steps {
                            echo 'Preparing deploy keys'
                            sh 'mkdir /home/jenkins/.ssh'
                            sh 'chown jenkins:jenkins /home/jenkins/.ssh'
                            sh 'chmod 0700 /home/jenkins/.ssh'
                            withCredentials([file(credentialsId: 'id_rsa-reglendobot', variable: 'DEPLOYKEY_PRIVATE')]) {
                                sh 'cp $DEPLOYKEY_PRIVATE /home/jenkins/.ssh/id_rsa'
                                sh 'chown jenkins:jenkins /home/jenkins/.ssh/id_rsa'
                                sh 'chmod 0600 /home/jenkins/.ssh/id_rsa'
                            }
                            sh 'git config --global user.email "ping@reglendo.com"'
                            sh 'git config --global user.name "Jenkins"'
                            sh 'echo "Host github.com\n\tStrictHostKeyChecking no\n" >> /home/jenkins/.ssh/config'
                        }
                    }
                    stage("prepare") {
                        steps {
                            echo 'Yarn install'
                            sh '''
                                rm -rf node_modules

                                export YARN_HASH=`sha1sum yarn.lock --text | awk \'{print $1}\'`
                                export YARN_CACHE_DIR="/home/jenkins/supercache/yarn/$YARN_HASH"
                                echo $YARN_HASH
                                echo $YARN_CACHE_DIR

                                if [ ! -d "$YARN_CACHE_DIR" ] ; then
                                    mkdir $YARN_CACHE_DIR
                                fi

                                if [ ! -d "$YARN_CACHE_DIR/installed" ] ; then
                                    rm -rf $YARN_CACHE_DIR
                                    mkdir $YARN_CACHE_DIR
                                    mkdir ./node_modules
                                    sudo mount --bind $YARN_CACHE_DIR ./node_modules
                                    yarn
                                    sudo chmod -R 0777 ./node_modules
                                    mkdir "$YARN_CACHE_DIR/installed"
                                else
                                    mkdir ./node_modules
                                    sudo mount --bind $YARN_CACHE_DIR ./node_modules
                                fi
                            '''
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
                                echo 'Copy build files to ignored directory'
                                sh 'rm -rf build'
                                sh 'mkdir build'
                                sh 'cp -r dist build/'
                                sh 'cp -r docs build/'
                                sh 'cp -r lib build/'
                                sh 'cp -r lib_ts build/'

                                echo 'Reset to base branch'
                                sh 'git status'
                                sh 'git stash'
                                sh 'git fetch --all'
                                sh 'git reset --hard'
                                sh 'git checkout -f master'
                                sh 'git pull -f origin master'

                                echo 'Copy back build files'
                                sh 'cp -rfT build/dist dist'
                                sh 'cp -rfT build/docs docs'
                                sh 'cp -rfT build/lib lib'
                                sh 'cp -rfT build/lib_ts lib_ts'

                                echo 'Commit build files and push'
                                sh 'git add --all .'
                                sh 'git commit -m "js+css build [ci skip]" || echo "Commit failed. There is probably nothing to commit."'
                                sh 'git push'

                                echo 'Publish'
                                withCredentials([string(credentialsId: 'reglendo-bot-npm-token', variable: 'NPM_TOKEN')]) {
                                    sh 'echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > /home/jenkins/.npmrc'
                                    sh 'npm publish || echo "Publish failed. No new version?"'
                                }
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

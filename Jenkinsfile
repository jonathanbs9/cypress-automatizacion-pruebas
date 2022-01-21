pipeline{ 
    agent any   

    tools { nodejs "Node" }
    
    stages{
        stage("Cypress Parallel Test Suite"){
            parallel{
                stage('Esclavo 1 - Page Object') {
                    agent {
                        label "Agente21.01.16.21_1"
                    }
                    steps {
                        git url: 'https://github.com/jonathanbs9/cypress-automatizacion-pruebas.git'
                        bat 'npm install' 
                        bat 'npm update'
                        bat 'npx cypress run --record --key 79a7977f-3e41-4ea3-a264-9411948685db --parallel --spec "cypress/integration/seccion-6/page-object-1.spec.js'
                        always{
                            echo "========END TEST STEPS========"
                        }
                    }
                }

                stage('Esclavo 2 - Hooks') {
                    agent {
                        label "Agente21.01.16.21_2"
                    }
                    steps {
                        git url: 'https://github.com/jonathanbs9/cypress-automatizacion-pruebas.git'
                        bat 'npm install' 
                        bat 'npm update'
                        bat 'npx cypress run --record --key 79a7977f-3e41-4ea3-a264-9411948685db --parallel --spec "cypress/integration/seccion-5/hooks.spec.js'
                        always{
                            echo "========END TEST STEPS========"
                        }
                    }
                }

                stage('Esclavo 3 - Cucumber.feature') {
                    agent {
                        label "Agente21.01.16.21_3"
                    }
                    steps {
                        git url: 'https://github.com/jonathanbs9/cypress-automatizacion-pruebas.git'
                        bat 'npm install' 
                        bat 'npm update'
                        bat 'npx cypress run --record --key 79a7977f-3e41-4ea3-a264-9411948685db --parallel --spec "cypress/integration/cucumber.feature'
                        always{
                            echo "========END TEST STEPS========"
                        }
                    }
                }
            }    
        }
    }    
}
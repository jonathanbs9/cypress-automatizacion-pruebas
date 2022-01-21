Feature: Demo Cucumber

    This a Demo to use Cucumber

    Scenario Outline: Scenario 1 - Alta de usuario
        Given Abro el navegador principal
        When Cargo el nombre <username>
        When Cargo el email <email>
        And Cargo la current address "<current_address>"
        And Cargo la permanent address "<permanent_address>"
        And Click en submit
        Then Validar el nombre de la pagina

        Examples:
            | username | email                       | current_address | permanent_address           |
            | Jonathan | test.automation@cypress.io  | 123 Fake St     | Mar del Plata, Buenos Aires |
            | Valentin | test2.automation@cypress.io | Calle falsa 123 | Mar del Plata, Buenos Aires |
            | Ezequiel | test3.automation@cypres.io  | 987 Fk Street   | Palermo, Buenos Aires       |
            | Rodrigo  | test4.automation@cypress.io | 558 Rod St      | Batan, Buenos Aires         |

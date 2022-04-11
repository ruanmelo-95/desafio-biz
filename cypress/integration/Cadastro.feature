Feature: Cadastro

    Como usuário, desejo criar um cadasrtro
    Para que possa acessar o sistema

Scenario: Cadastro de novo usuário
    Given que acesse o site
    When informar meus dados 
    And salvar 
    Then devo ser cadastrado com sucesso
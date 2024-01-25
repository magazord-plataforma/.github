# Contribuindo

Contribuições são aceitas por meio de Pull Request no Github do respectivo repositório.

## Commits

O projeto segue um padrão estrito de mensagens para commits sendo que deve atender o formato abaixo:

```text
type(scope?): issue? - message
```

* Os campos **type**, **scope** e **message** são definidos de acordo com o padrão [Convential Commits][link-convent]. 
* O campo **issue** representa o identificador da atividade qual originou a melhoria.

```text
style: MAG-21249 - definição style repo commit
```

O valor MAG-21249 corresponde ao identificador da atividade relacionada a melhoria criada pelo aplicativo de controle.


## Pull Requests

- **Documente qualquer mudança em comportamento** - Assegure-se de que o `README.md` e qualquer outra documentação
  relevante seja mantida atualizada.

- **Considere o ciclo de liberações** - O projeto segue o padrão [SemVer v2.0.0](http://semver.org/). A quebra de
  APIs públicas é inaceitável.

- **Um pull request por feature** - Se você quiser fazer mais de uma coisa, mande mais de um pull request.

- **Mantenha um histórico coerente** - Assegure-se de que cada commit em seu pull request seja significativo. Se você
  tiver múltiplos commits intermediários enquanto estiver desenvolvendo por favor faça o [squash][link-squash] antes
  encaminhar as melhorias.

[link-squash]: http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages
[link-convent]: https://www.conventionalcommits.org/en/v1.0.0/

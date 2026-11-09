# Lista de Tarefas Web

Projeto de estudo de desenvolvimento front-end para praticar HTML, CSS e JavaScript construindo uma lista de tarefas.

**Estágio:** versão inicial funcional da lista e da alternância de tema. A interface de temporizador está em desenvolvimento.

## Funcionalidades

- Adicionar tarefas pelo campo de texto.
- Validar entradas vazias e impedir nomes duplicados.
- Remover uma tarefa ao concluí-la.
- Alternar entre tema claro e escuro.

As tarefas ficam somente em memória: recarregar a página limpa a lista. Os ícones são carregados pelo CDN do Bootstrap Icons.

## Como executar

Não é necessário instalar dependências npm ou configurar um back-end.

```bash
git clone https://github.com/Assoridente/Projeto-trilha-todolist.git
cd Projeto-trilha-todolist
```

Abra o arquivo **`projeto to do.html`** no navegador. Também é possível usar a extensão Live Server do editor.

## Tecnologias

HTML5 · CSS3 · JavaScript · Bootstrap Icons.

## Organização

| Arquivo | Responsabilidade |
| --- | --- |
| `projeto to do.html` | Estrutura da página e campos de interação |
| `styles.css` | Layout, cores e estilos |
| `script.js` | Cadastro, conclusão e validação das tarefas; alternância de tema |

## Limitações conhecidas

O temporizador ainda precisa ser conectado aos controles da página: o script consulta `#timer`, enquanto o HTML usa `#timer-display`. Por isso, o temporizador não deve ser considerado concluído.

A lista que verifica duplicidade mantém os nomes das tarefas já adicionadas, inclusive após a remoção. Uma melhoria futura é permitir reutilizar o nome de uma tarefa concluída.

## Aprendizados

Manipulação do DOM, eventos, validação de entrada, organização de estilos e evolução de uma interface estática para uma aplicação interativa.

Para uma versão com componentes React, temporizador e painel de inspiração, veja [Tarefas e Foco](https://github.com/Assoridente/todo-list-app-react).

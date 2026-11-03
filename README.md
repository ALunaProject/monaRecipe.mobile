# 🍝 Mona Recipes - Mobile

Bem-vindo ao Mona Recipes, um aplicativo mobile onde você encontra as melhores receitas caseiras, explora o cardápio completo, salva suas receitas favoritas e localiza o restaurante no mapa.
> _Desenvolvido por Team Luna._

## ✨ Funcionalidades

- **Splash & Onboarding**: apresentação do app em 3 etapas, com atalhos para o Catálogo e para o Mapa.
- **Catálogo**: listagem de receitas em grid, consumidas da API [DummyJSON](https://dummyjson.com/docs/recipes).
- **Busca**: pesquisa de receitas através de um drawer lateral.
- **Favoritos**: marque e desmarque receitas como favoritas.
- **Detalhes da receita**: ingredientes, modo de preparo, tempo e dificuldade.
- **Mapa**: geocodificação do endereço e exibição da localização com marcador.

## 🛠️ Ferramentas Utilizadas

| Área             | Tecnologia                                         |
|------------------|----------------------------------------------------|
| Ferramenta       | *React 19 + React Native 0.88*                     |
| Linguagem        | *TypeScript*                                       |
| Framework        | *Expo SDK 58*                                      |
| Navegação        | *React Navigation (Native Stack)*                  |
| Styling          | *styled-components*                                |
| Fontes           | *Expo Google Fonts (Montserrat, Glory)*            |
| Ícones           | *@expo/vector-icons*                               |
| Client State     | *React Hooks (useState / hooks personalizados)*    |
| HTTP Client      | *Axios*                                            |
| API              | *[DummyJSON](https://dummyjson.com/docs/recipes)*  |
| Mapas            | *react-native-maps + expo-location*                |
| Gestos/Animações | *react-native-gesture-handler + Reanimated*        |
| Drawer           | *react-native-drawer-layout*                       |
| Lint             | *ESLint (eslint-config-expo)*                      | 
| Package manager  | *npm*                                              |

## 🏗️ Instalação

### Pré-requisitos:
- [Node.js](https://nodejs.org/) (LTS)
- App [Expo Go](https://expo.dev/go) no celular **ou** um emulador Android / simulador iOS

### Clone o repositório:
```
git clone https://github.com/ALunaProject/monaRecipe.mobile.git
cd monaRecipe.mobile
```

### Instale as dependências:
```
npm install
```

### Rodando o projeto:
```
npx expo start
```
Escaneie o QR Code com o app Expo Go (Android) ou com a câmera (iOS) para ver a aplicação.
Você também pode usar os atalhos:
```
npm run android   # Abre no emulador Android
npm run ios       # Abre no simulador iOS
npm run web       # Abre no navegador
```

### Lint e tipagem:
```
npm run lint
npx tsc --noEmit
```

## 📁 Estrutura do Projeto

A estrutura do projeto é organizada para facilitar a manutenção e o desenvolvimento, como exemplificado abaixo:
```
  src/
├── App.tsx                       # Componente principal (Providers, NavigationContainer)
├── assets/                       # Arquivos estáticos (ícones, splash, imagens)
│   ├── icon.png
│   ├── splash-icon.png
│   └── onboarding-bg.jpg
│
├── navigation/                   # Configuração da navegação
│   ├── RootNavigator.tsx         # Stack Navigator com todas as telas
│   ├── types.ts                  # Tipagem das rotas (RootStackParamList)
│   └── index.ts                  # Exportador
│
├── screens/                      # Telas da aplicação
│   ├── Splash/                   # Tela de abertura
│   │   ├── index.tsx             # Componente principal da tela
│   │   └── styles.ts             # Estilos específicos da tela
│   ├── Onboarding/               # Apresentação do app em 3 etapas
│   ├── Home/
│   ├── Catalog/                  # Catálogo de receitas
│   │   ├── components/
│   │   │   └── CatalogContent.tsx  # Estados de loading/erro e grid de receitas
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── Recipe/                   # Detalhes da receita
│   └── Maps/                     # Mapa com a localização
│       ├── index.tsx
│       ├── styles.ts
│       └── useGeocode.ts         # Converte endereço em coordenadas
│
├── components/                   # Componentes reutilizáveis (globais)
│   ├── Button/
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── RecipeCard/
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Drawer/                   # Drawers laterais
│   │   ├── PageDrawer/           # Menu de navegação
│   │   ├── SearchDrawer/         # Busca de receitas
│   │   ├── SideDrawers/          # Composição dos drawers
│   │   ├── styles.ts
│   │   └── types.ts
│   └── index.ts                  # Exportador
│
├── hooks/                        # Hooks personalizados
│   ├── useRecipes.ts             # Carregamento das receitas
│   ├── useRecipeSearch.ts        # Filtro/busca de receitas
│   ├── useFavorites.ts           # Gerenciamento de favoritos
│   ├── useDrawerControl.ts       # Abertura/fechamento dos drawers
│   ├── useCatalogHeader.tsx      # Header customizado do catálogo
│   └── index.ts
│
├── services/                     # Serviços da aplicação
│   ├── api.ts                    # Configuração do cliente HTTP (Axios)
│   ├── recipes.ts                # Endpoints e tipagens de receitas
│   └── index.ts
│
└── theme/                        # Cores e tokens de design
    └── index.ts
```

## 🌱 Contribuições

Fique à vontade para abrir uma issue ou enviar um pull request para melhorias ou correções. Suas contribuições são bem-vindas!

## 🔗 Links

[![Expo](https://img.shields.io/badge/Expo-%23000020.svg?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/)
[![React Native](https://img.shields.io/badge/React_Native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/docs/getting-started)
[![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![React Navigation](https://img.shields.io/badge/React_Navigation-%236B52AE.svg?style=for-the-badge&logo=react&logoColor=white)](https://reactnavigation.org/docs/getting-started)
[![styled-components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/docs)
[![Axios](https://img.shields.io/badge/Axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/docs/intro)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

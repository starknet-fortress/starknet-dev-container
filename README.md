# Starknet Dev Container

Welcome to Starknet Dev Container! This project combines VS Code's Dev Containers with best Starknet development tools to create a clean and isolated workspace environment for open-source Starknet projects. 

Clone your project, open it in container and start coding! Don't worry about version or missing tools. No more "it doesn't work on my machine" issues!

> **SECURITY NOTE**: While this containerized setup provides an additional layer of protection, each developer remains responsible for their own cryptographic security. Always follow blockchain security best practices, sensitive data should never be stored in development environments, including dev containers!

## Overview

This project provides two key components:

1. [Docker Image](#docker-image) - A pre-configured container with all essential Starknet development tools, managed by ASDF for seamless version control
2. [VsCode Dev Container](#vscode-dev-container) - A ready-to-use VS Code development environment that ensures consistent and isolated development across your entire team

## Get Started

Before starting your isolated Starknet local development environment, you need:

1. [Docker](https://www.docker.com/products/docker-desktop) installed on your machine
2. [Visual Studio Code](https://code.visualstudio.com/) installed
3. [Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) for VS Code

## Docker Image

The Docker image is available on [Docker Hub](https://hub.docker.com/r/starknet-fortress/starknet-dev-container). It is based on the official Ubuntu 24.04 image and includes all necessary tools for Starknet development.

- Use [ASDF](https://asdf-vm.com/guide/getting-started.html) as version manager for seamless align of tools versions across all contributors.
- Pre-installed essential Starknet development tools:
    - [NodeJs](https://nodejs.org/)
    - [Yarn](https://yarnpkg.com/)
    - [Rust](https://www.rust-lang.org/fr)
    - [Scarb](https://docs.swmansion.com/scarb/)
    - [Starkli](https://book.starkli.rs/)
    - [Starknet Foundry](https://foundry-rs.github.io/starknet-foundry/)
    - [Starknet Devnet](https://0xspaceshard.github.io/starknet-devnet/)

> **WARNING**: This Docker image currently uses ASDF version 0.15.0. Starting from ASDF version 0.16.0, ASDF introduces a breaking changes in its CLI commands. This change will be addressed in a future update.

### Build the Docker Image Locally

To build the image locally instead of pulling from Docker Hub:
```bash
git clone https://github.com/starknet-fortress/starknet-dev-container
cd starknet-dev-container
docker build -t starknet-dev-container .
```

## Vscode Dev Container 

The Dev Container configuration provides a consistent and isolated development environment that works identically across all team members' machines. This eliminates the "it works on my machine" problem and ensures everyone follows the same security practices.

### Your developer journey

1. Open the project folder in VS Code
2. Press `F1` or `Cmd/Ctrl + Shift + P` and type "Dev Containers: Open Folder in Container"
3. Wait for the container to build and configure (first time only)
4. Ready to go!

Your VS Code is connected to the container and you can start developing, debugging, and testing your project as if you were working locally.
Git and terminal commands are available as well.

#### Rebuild the container

If you need to rebuild the container, for example, if you've updated the `.devcontainer.json` file, you can do so by pressing `F1` or `Cmd/Ctrl + Shift + P` and typing "Dev Containers: Rebuild Container".

### Containerize your project

Create a `.devcontainer.json` file at the root of your project. This file is the heart of your Dev Container configuration. It defines the container image, the post-start command to initialize tooling versions, and the VS Code extensions to install.

```json
{
  "name": "project",
  "image": "starknetfortress/starknet-dev-container:latest",
  "postStartCommand": "asdf install",
  "customizations": {
    "vscode": {
      "extensions": [
        "StarkWare.cairo1",
        "tamasfe.even-better-toml",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
```

#### Scaffold-Stark and Starknet-Scaffold compatibility

If your contracts are in a different directory, simply modify the `postStartCommand` in your `.devcontainer.json`:

For Scaffold-Stark
```json
{
  "postStartCommand": "cd packages/snfoundry/contracts && scarb install"
}
```
or Starknet-Scaffold
```json
{
"postStartCommand": "cd contracts && scarb install"
}
```

#### Define tool versions

The `.tool-versions` file manages tool versions using ASDF. This ensures everyone in your team uses the same versions of each tool. Here's an example:
And no need to install the tools manually, the container will install them for you during the startup process.
```
scarb 2.9.2 
starknet-foundry 0.35.0
```

#### Included VS Code Extensions

The `customizations` section in the `.devcontainer.json` file specifies which VS Code extensions to install. 

- StarkWare.cairo1 - Cairo language support
- tamasfe.even-better-toml - Enhanced TOML support
- esbenp.prettier-vscode - Code formatting

#### Jetbrains IDEs

Currently, JetBrains IDE support for Dev Containers is in preview and is not officially supported.

## Roadmap

- [x] Initial Docker container setup
- [ ] Add a preconfigured image with [Dojo](https://book.dojoengine.org/)
- [ ] Add more documentation and examples, specifically for sensitive topics like security and container management
- [ ] Enable ZSH autocompletion + provide lightweight and effective prompt management 
- [ ] Optimize the container size

## Contributing

Contributions are welcome! Open an issue or submit a Pull Request.


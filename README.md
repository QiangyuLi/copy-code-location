# Copy Code Location

A simple VS Code extension that adds a right-click menu item to copy the current file path and line number.

## Features

- **Right-click Context Menu**: Adds a "Copy Code Location" option to the editor context menu
- **Quick Copy**: Instantly copies the file path and line number to your clipboard
- **Line Number Tracking**: Captures the current cursor position's line number

## Usage

1. Open any file in VS Code
2. Right-click anywhere in the editor
3. Select "Copy Code Location" from the context menu
4. The file path and line number will be copied to your clipboard in the format: `<file-path>:<line-number>`

### Example Output

```
/home/user/project/src/index.ts:42
```

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/QiangyuLi/copy-code-location.git
   cd copy-code-location
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the extension:
   ```bash
   npm run compile
   ```

4. Press F5 in VS Code to open a new Extension Development Host window with the extension loaded

### From VSIX

1. Build the extension:
   ```bash
   npm install -g @vscode/vsce
   vsce package
   ```

2. Install the generated `.vsix` file:
   - Open VS Code
   - Go to Extensions view
   - Click the "..." menu
   - Select "Install from VSIX..."
   - Choose the generated `.vsix` file

## Development

### Prerequisites

- Node.js (v18 or higher)
- VS Code (v1.74.0 or higher)

### Building

```bash
npm install
npm run compile
```

### Watching for Changes

```bash
npm run watch
```

## License

Apache-2.0 - See [LICENSE](LICENSE) file for details

## Repository

https://github.com/QiangyuLi/copy-code-location

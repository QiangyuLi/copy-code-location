import * as vscode from 'vscode';

/**
 * This method is called when the extension is activated
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('Copy Code Location extension is now active');

    // Register the command for copying code location
    const disposable = vscode.commands.registerCommand('copy-code-location.copyLocation', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        // Get the current file path
        const filePath = editor.document.uri.fsPath;
        
        // Get the selection range
        const selection = editor.selection;
        const startLine = selection.start.line + 1; // Line numbers are 0-indexed, so add 1
        const endLine = selection.end.line + 1;
        
        // Format the location string
        let location: string;
        if (startLine === endLine || selection.isEmpty) {
            // Single line or no selection
            location = `${filePath}:${startLine}`;
        } else {
            // Multiple lines selected
            location = `${filePath}:${startLine}-${endLine}`;
        }
        
        // Copy to clipboard
        vscode.env.clipboard.writeText(location).then(() => {
            vscode.window.showInformationMessage(`Copied: ${location}`);
        }, (error) => {
            vscode.window.showErrorMessage(`Failed to copy: ${error}`);
        });
    });

    context.subscriptions.push(disposable);
}

/**
 * This method is called when the extension is deactivated
 */
export function deactivate() {
    // Cleanup if needed
}

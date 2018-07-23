'use strict';

import * as vscode from 'vscode';
import jokes from './jokes';

export function activate(context: vscode.ExtensionContext) {
    let jokesService = new jokes();
    jokesService.renderJoke();
    
    context.subscriptions.push(jokesService);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
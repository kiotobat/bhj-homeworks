function saveItemLocalStorage(key, value) {
    if (typeof value !== 'string') {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.setItem(key, value);
    }
}

function actionsWithEditor() {
    const editor = document.getElementById('editor');
    const keyOfEditor = 'textInEditor';

    if (localStorage.getItem(keyOfEditor)) {
        editor.value = localStorage.getItem(keyOfEditor);
    }

    editor.addEventListener('input', () => {
        if (!editor.value) {
            localStorage.removeItem(keyOfEditor);
            return;
        }

        if (editor.value.match(/^\s*$/)) return;

        saveItemLocalStorage(keyOfEditor, editor.value.trim());
    });
}

actionsWithEditor();
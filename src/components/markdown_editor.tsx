import * as React from 'react';

export interface Props {
    markdownText: string;
    handleTextChange(e: React.SyntheticEvent<HTMLTextAreaElement>): void;
}

const MarkdownEditor: React.SFC<Props> = ({ markdownText, handleTextChange }) => (
    <div className="markdown-editor col-sm-6">
        <textarea value={markdownText} rows={20} onChange={handleTextChange} />
    </div>
);

export default MarkdownEditor;
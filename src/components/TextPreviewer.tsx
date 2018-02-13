import * as React from 'react';
import * as  marked from 'marked';

export interface Props {
    markdownText: string;
}

class TextPreviewer extends React.Component<Props> {
    createHTMLtext = () => {
        const hmtl = marked(this.props.markdownText, {sanitize: true});
        return { __html: hmtl };
    }

    render() {
        return (
            <div className="text-previewer col-sm-6" dangerouslySetInnerHTML={this.createHTMLtext()} />
        );
    }
}

export default TextPreviewer;
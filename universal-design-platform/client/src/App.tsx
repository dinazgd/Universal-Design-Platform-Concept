import React from 'react';
import UnifiedInterface from './components/UnifiedInterface';
import AssetManager from './components/AssetManager';
import ContentEditor from './components/ContentEditor';
import FormatAdapter from './components/FormatAdapter';
import PreviewSystem from './components/PreviewSystem';

const App: React.FC = () => {
    return (
        <div className="App">
            <UnifiedInterface />
            <AssetManager />
            <ContentEditor />
            <FormatAdapter />
            <PreviewSystem />
        </div>
    );
};

export default App;
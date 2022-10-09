import React from 'react';
import ReactDOM from 'react-dom/client';
import 'elelive-ui/es/index-all.min.css';
import Utils from 'elelive-ui/es/Components/Utils';
import App from './app/app';
document.documentElement.className = 'theme-light';
// document.documentElement.className = "theme-dark";
Utils.supportsWebp(window).then((res: boolean) => {
    if (res) {
        document.body.classList.add('webp');
    }
});
//
// ReactDOM.render(<App />, document.getElementById('app'));
//

// @ts-ignore
// const root = createRoot(document.getElementById('app'));
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

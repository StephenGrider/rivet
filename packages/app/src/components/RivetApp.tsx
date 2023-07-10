import { GraphBuilder } from './GraphBuilder.js';
import { MenuBar } from './MenuBar.js';
import { FC } from 'react';
import { css } from '@emotion/react';
import { SettingsModal } from './SettingsModal.js';
import { setGlobalTheme } from '@atlaskit/tokens';
import { LeftSidebar } from './LeftSidebar.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PromptDesignerRenderer } from './PromptDesigner.js';
import { useGraphExecutor } from '../hooks/useGraphExecutor.js';
import { useMenuCommands } from '../hooks/useMenuCommands.js';

const styles = css`
  overflow: hidden;
`;

setGlobalTheme({
  colorMode: 'dark',
});

export const RivetApp: FC = () => {
  const { tryRunGraph, tryAbortGraph, tryPauseGraph, tryResumeGraph } = useGraphExecutor();

  useMenuCommands({
    onRunGraph: tryRunGraph,
  });

  return (
    <div className="app" css={styles}>
      <MenuBar
        onRunGraph={tryRunGraph}
        onAbortGraph={tryAbortGraph}
        onPauseGraph={tryPauseGraph}
        onResumeGraph={tryResumeGraph}
      />
      <LeftSidebar />
      <GraphBuilder />
      <SettingsModal />
      <PromptDesignerRenderer />
      <ToastContainer position="bottom-right" hideProgressBar newestOnTop />
    </div>
  );
};
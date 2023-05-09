import { css } from '@emotion/react';
import { FC, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { graphState } from '../state/graph';
import { savedGraphsState } from '../state/savedGraphs';
import { orderBy } from 'lodash-es';
import { nanoid } from 'nanoid';
import DropdownMenu, { DropdownItem } from '@atlaskit/dropdown-menu';
import Button from '@atlaskit/button';
import { ReactComponent as MoreIcon } from 'majesticons/line/more-menu-vertical-line.svg';
import { ReactComponent as ExpandLeftIcon } from 'majesticons/line/menu-expand-left-line.svg';
import { ReactComponent as ExpandRightIcon } from 'majesticons/line/menu-expand-right-line.svg';
import { InlineEditableTextfield } from '@atlaskit/inline-edit';
import { useDeleteGraph } from '../hooks/useDeleteGraph';
import { useLoadGraph } from '../hooks/useLoadGraph';
import { emptyNodeGraph } from '@ironclad/nodai-core';

const styles = css`
  position: fixed;
  top: 32px; // Adjust this value based on the height of the MenuBar
  left: 0;
  bottom: 0;
  width: 300px; // Adjust the width of the sidebar as needed
  background-color: var(--grey-dark);
  padding: 1rem;
  z-index: 50;
  border-right: 1px solid var(--grey);

  label {
    font-size: 12px;
  }

  .graphs-section {
    margin-top: 2rem;
  }

  .graph-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .graph-item {
    background-color: var(--grey-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: var(--grey-darkish);
    }
  }

  .graph-item-select {
    cursor: pointer;
    padding: 4px 8px;
    flex: 1;
  }

  .toggle-tab {
    position: absolute;
    top: 10px;
    right: -32px;
    background-color: var(--grey-dark);
    border: 1px solid var(--grey);
    border-left: 0;
    border-radius: 0 8px 8px 0;
    width: 32px;
    height: 32px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 100;
  }

  .toggle-tab:hover {
    background-color: var(--grey-darkish);
  }

  .graphs-section-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: center;

    button {
      padding: 4px 8px;
      border-radius: 4px;
      background-color: var(--grey-dark);
      border: 1px solid var(--grey);
      cursor: pointer;

      &:hover {
        background-color: var(--grey-darkish);
      }
    }
  }
`;

const moreDropdownCss = css`
  span {
    font-size: 32px;
  }
`;

export const LeftSidebar: FC = () => {
  const [graph, setGraph] = useRecoilState(graphState);
  const savedGraphs = useRecoilValue(savedGraphsState);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const sortedGraphs = orderBy(savedGraphs, ['metadata.name'], ['asc']);

  const deleteGraph = useDeleteGraph();
  const loadGraph = useLoadGraph();

  function handleNew() {
    loadGraph(emptyNodeGraph());
  }

  return (
    <div
      css={styles}
      style={{ transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.3s ease' }}
    >
      <div className="toggle-tab" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
        {isSidebarVisible ? <ExpandLeftIcon /> : <ExpandRightIcon />}
      </div>
      <div className="graph-info-section">
        <InlineEditableTextfield
          label="Graph Name"
          placeholder="Graph Name"
          onConfirm={(newValue) => setGraph({ ...graph, metadata: { ...graph.metadata, name: newValue } })}
          defaultValue={graph.metadata?.name ?? 'Untitled Graph'}
          readViewFitContainerWidth
        />

        <InlineEditableTextfield
          label="Description"
          placeholder="Graph Description"
          defaultValue={graph.metadata?.description ?? ''}
          onConfirm={(newValue) => setGraph({ ...graph, metadata: { ...graph.metadata, description: newValue } })}
          readViewFitContainerWidth
        />
      </div>
      <div className="graphs-section">
        <div className="graphs-section-header">
          <label>Graphs</label>
          <button className="new-graph" onClick={handleNew}>
            New
          </button>
        </div>
        <div className="graph-list">
          {sortedGraphs.map((savedGraph) => (
            <div key={savedGraph.metadata?.id ?? nanoid()} className="graph-item">
              <div className="graph-item-select" onClick={() => loadGraph(savedGraph)}>
                {savedGraph.metadata?.name ?? 'Untitled Graph'}
              </div>
              <DropdownMenu
                trigger={({ triggerRef, ...props }) => (
                  <Button css={moreDropdownCss} {...props} iconBefore={<MoreIcon />} ref={triggerRef} />
                )}
              >
                <DropdownItem onClick={() => deleteGraph(savedGraph)}>Delete</DropdownItem>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

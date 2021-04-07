// @flow

import { Checkbox } from '@atlaskit/checkbox';
import React from 'react';

import { AbstractDialogTab } from '../../../base/dialog';

/**
 * React {@code Component} for modifying custom settings.
 *
 * @extends Component
 */
class CustomTab extends AbstractDialogTab {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { showLocalVideoFirst, reorderActiveSpeakers } = this.props;

        return (<div className = 'more-tab custom-tab'>
            <div className = 'settings-sub-pane'>
                <Checkbox
                    isChecked = { showLocalVideoFirst }
                    label = 'Show Local Video First'
                    name = 'show-local-video-first'
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange = {
                        ({ target: { checked } }) =>
                            super._onChange({ showLocalVideoFirst: checked })
                    } />
                <Checkbox
                    isChecked = { reorderActiveSpeakers }
                    label = 'Reorder Active Speakers'
                    name = 'reorder-active-speakers'
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange = {
                        ({ target: { checked } }) =>
                            super._onChange({ reorderActiveSpeakers: checked })
                    } />
            </div>
        </div>);
    }
}

export default CustomTab;

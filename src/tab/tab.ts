/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    html,
    property,
    CSSResultArray,
    query,
    TemplateResult,
} from 'lit-element';

import { Focusable } from '../shared/focusable';

import tabItemStyles from './tab.css';

/**
 * @slot icon - The icon that appears on the left of the label
 */

export class Tab extends Focusable {
    public static get styles(): CSSResultArray {
        return [tabItemStyles];
    }

    @query('#tab')
    private tabElement!: HTMLElement;

    @property({ reflect: true })
    public label = '';

    @property({ type: Boolean, reflect: true })
    public selected = false;

    @property({ type: String, reflect: true })
    public value = '';

    public get focusElement(): HTMLElement {
        return this.tabElement;
    }

    protected render(): TemplateResult {
        return html`
            <div id="tab">
                <slot name="icon"></slot>
                <label id="itemLabel">
                    ${this.label}
                </label>
            </div>
        `;
    }
}

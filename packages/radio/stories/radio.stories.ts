/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { html, TemplateResult } from '@spectrum-web-components/base';

import '../sp-radio.js';
import '../sp-radio-group.js';

export default {
    component: 'sp-radio',
    title: 'Radio',
};

export const Default = (): TemplateResult => {
    return html`
        <sp-radio>Radio</sp-radio>
    `;
};

export const Checked = (): TemplateResult => {
    return html`
        <sp-radio checked>Radio</sp-radio>
    `;
};

export const emphasized = (): TemplateResult => {
    return html`
        <sp-radio emphasized>Radio</sp-radio>
    `;
};

export const emphasizedChecked = (): TemplateResult => {
    return html`
        <sp-radio emphasized checked>Radio</sp-radio>
    `;
};

export const Autofocus = (): TemplateResult => {
    return html`
        <sp-radio autofocus>Radio</sp-radio>
    `;
};

export const Invalid = (): TemplateResult => {
    return html`
        <sp-radio invalid>Radio</sp-radio>
    `;
};

export const invalidChecked = (): TemplateResult => {
    return html`
        <sp-radio invalid checked>Radio</sp-radio>
    `;
};

invalidChecked.story = {
    name: 'Invalid checked',
};

export const Disabled = (): TemplateResult => {
    return html`
        <sp-radio disabled>Radio</sp-radio>
    `;
};

export const disabledChecked = (): TemplateResult => {
    return html`
        <sp-radio disabled checked>Radio</sp-radio>
    `;
};

disabledChecked.story = {
    name: 'Disabled checked',
};

export const labelBelow = (): TemplateResult => {
    return html`
        <sp-radio label-below>Radio</sp-radio>
    `;
};

labelBelow.story = {
    name: 'Label below',
};

export const labelBelowChecked = (): TemplateResult => {
    return html`
        <sp-radio label-below checked>Radio</sp-radio>
    `;
};

labelBelowChecked.story = {
    name: 'Label below checked',
};

export const groupExample = (): TemplateResult => {
    return html`
        <sp-radio-group vertical selected="first" name="group-example">
            <sp-radio value="first">Option 1</sp-radio>
            <sp-radio value="second">Option 2</sp-radio>
            <sp-radio value="third">Option 3</sp-radio>
            <sp-radio value="fourth">Option 4</sp-radio>
        </sp-radio-group>
    `;
};

export const horizontalGroup = (): TemplateResult => {
    return html`
        <sp-radio-group horizontal selected="first" name="group-example">
            <sp-radio value="first">Option 1</sp-radio>
            <sp-radio value="second">Option 2</sp-radio>
            <sp-radio value="third">Option 3</sp-radio>
            <sp-radio value="fourth">Option 4</sp-radio>
        </sp-radio-group>
    `;
};

export const horizontalLabelBelowGroup = (): TemplateResult => {
    return html`
        <sp-radio-group horizontal selected="first" name="group-example">
            <sp-radio value="first" label-below>Option 1</sp-radio>
            <sp-radio value="second" label-below>Option 2</sp-radio>
            <sp-radio value="third" label-below>Option 3</sp-radio>
            <sp-radio value="fourth" label-below>Option 4</sp-radio>
        </sp-radio-group>
    `;
};

export const tabIndexExample = (): TemplateResult => {
    return html`
        <sp-radio-group vertical name="group-example">
            <sp-radio quiet value="zero" tabindex="0">Tab Index 0</sp-radio>
            <sp-radio disabled value="three" tabindex="3">
                Tab Index 3
            </sp-radio>
            <sp-radio value="one" tabindex="1" autofocus>
                Tab Index 1
            </sp-radio>
            <sp-radio value="four" tabindex="4">Tab Index 4</sp-radio>
            <sp-radio invalid value="two" tabindex="2">
                Tab Index 2
            </sp-radio>
        </sp-radio-group>
    `;
};

export const horizontalTabIndexExample = (): TemplateResult => {
    return html`
        <sp-radio-group horizontal name="group-example">
            <sp-radio quiet value="zero" tabindex="0">Tab Index 0</sp-radio>
            <sp-radio disabled value="three" tabindex="3">
                Tab Index 3
            </sp-radio>
            <sp-radio value="one" tabindex="1" autofocus>
                Tab Index 1
            </sp-radio>
            <sp-radio value="four" tabindex="4">Tab Index 4</sp-radio>
            <sp-radio invalid value="two" tabindex="2">
                Tab Index 2
            </sp-radio>
        </sp-radio-group>
    `;
};

tabIndexExample.story = {
    name: 'Tab index example',
};

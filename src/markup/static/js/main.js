'use strict';

import polyfills from './libraries/polyfills';
import tabLlist from 'components/tab-list/tab-list';
import popup from 'components/popup/popup';
import hero from 'components/hero/hero';


$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================

    tabLlist();
    popup();
    hero();
});

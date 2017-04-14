/**
 * @file example index
 * @author ielgnaw(wuji0223@gmail.com)
 */

import {router} from 'san-router';
import Main from './Main';
import Button from './Button.san';
import TextField from './TextField.san';
import Menu from './Menu.san';
import Tabs from './Tabs.san';
import Pagination from './Pagination.san';
import Popover from './Popover.san';
import Drawer from './Drawer.san';
import Progress from './Progress.san';
import Switch from './Switch.san';
import Radio from './Radio.san';

import './index.styl';

router.add({rule: '/', Component: Main, target: '#root'});
router.add({rule: '/button', Component: Button, target: '#root'});
router.add({rule: '/textfield', Component: TextField, target: '#root'});
router.add({rule: '/textfield', Component: TextField, target: '#root'});
router.add({rule: '/menu', Component: Menu, target: '#root'});
router.add({rule: '/tabs', Component: Tabs, target: '#root'});
router.add({rule: '/pagination', Component: Pagination, target: '#root'});
router.add({rule: '/popover', Component: Popover, target: '#root'});
router.add({rule: '/drawer', Component: Drawer, target: '#root'});
router.add({rule: '/progress', Component: Progress, target: '#root'});
router.add({rule: '/switch', Component: Switch, target: '#root'});
router.add({rule: '/radio', Component: Radio, target: '#root'});

router.start();

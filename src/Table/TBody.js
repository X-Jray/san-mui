import san from 'san';
import TR from './TR';

export default class TBody extends san.Component {
    static template = `<tbody><slot></slot></tbody>`;

    static messages = {
        'UI:tr-inited': function (e) {
            let tr = e.target;
            tr.data.set('pos', 'tbody');
            tr.data.set('tableSelectable', this.data.get('tableSelectable'));
        },

        'UI:table-select-item': function (e) {
            let selectable = this.data.get('tableSelectable');
            let selected;

            switch (selectable) {
                case 'single':
                    this.eachItem(function (tr, index) {
                        let isSelected = tr === e.target;

                        tr.data.set('selected', isSelected);
                        if (isSelected) {
                            selected = index;
                        }
                    });
                    break;

                case 'multi':
                    selected = [];
                    this.eachItem(function (tr, index) {
                        if (tr.data.get('selected')) {
                            selected.push(index);
                        }
                    });
                    break;

            }

            this.dispatch('UI:table-select', selected);
        }
    };

    inited() {
        this.dispatch('UI:tbody-inited');
    }

    eachItem(iterator) {
        this.findChildTRs().forEach((child, index) => {
            iterator.call(this, child, index);
            index++;
        });
    }

    findChildTRs() {
        let result = [];

        function find(node) {
            if (node instanceof TR) {
                result.push(node);
            }
            else if (node.childs) {
                node.childs.forEach(function (child) {
                    find(child);
                });
            }
        }

        find(this);

        return result;
    }
}


/**
 * @file Avatar Componennt
 * @author qiusiqi(qiusiqi@baidu.com)
 */

import san from 'san';
import Icon from '../Icon';

export default san.defineComponent({

    template: `
        <div class="sm-avatar {{ className }}" style="{{ avatarStyleDefault }}{{ avatarStyle }}">
            <san-icon san-if="{{ icon }}">{{ icon }}</san-icon>
            <slot></slot>
        </div>
    `,

    components: {
        'san-icon': Icon
    },

    initData() {
        return {
            'size': 40,
            'iconSize': 20,
            'background-color': '#bdbdbd',
            'color': '#f93',
            'src': ''
        };
    },

    computed: {
        avatarStyleDefault() {
            let size = this.data.get('size') + 'px';
            let style = {
                'background-color': this.data.get('backgroundColor'),
                'color': this.data.get('color'),
                'font-size': this.data.get('iconSize'),
                'width': size,
                'height': size,
                'line-height': size
            };

            if (this.data.get('src')) {
                Object.assign(style, {
                    'background-image': `url(${this.data.get('src')})`
                });
            }

            return style;
        }
    }
});

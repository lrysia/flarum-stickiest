import { extend } from 'flarum/extend';
import Discussion from 'flarum/models/Discussion';
import Badge from 'flarum/components/Badge';

export default function addStickyBadge() {
  extend(Discussion.prototype, 'badges', function (badges) {
    if ((this.isSticky() || this.isTagSticky()) && !this.isStickiest()) {
      badges.add(
        'sticky',
        Badge.component({
          type: 'sticky',
          label: this.isTagSticky()
            ? app.translator.trans('the-turk-stickiest.forum.badge.sticky_tooltip')
            : app.translator.trans('the-turk-stickiest.forum.badge.tag_sticky_tooltip'),
          icon: 'fas fa-thumbtack',
        }),
        10
      );
    }
  });
}

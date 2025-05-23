'use strict';

const { Broadcast } = require('ranvier');
const ItemUtil = require('../../hylands-lib/lib/ItemUtil');

module.exports = {
  aliases: ['worn'],
  usage: 'equipment',
  command: (state) => (args, player) => {
    if (!player.equipment.size) {
      return Broadcast.sayAt(player, "You are completely naked!");
    }

    Broadcast.sayAt(player, "Currently Equipped:");
    for (const [slot, item] of player.equipment) {
      Broadcast.sayAt(player, `  <${slot}> ${ItemUtil.display(item)}`);
    }
  }
};

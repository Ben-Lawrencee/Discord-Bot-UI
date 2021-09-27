<template>
  <div class="nav-avatar-wrapper" @click="onClick(guildId)">
    <div class="flex-container">
      <div ref="selection-wrapper" class="selection-wrapper" aria-hidden="true">
        <span ref="selection" class="selection"/>
      </div>
      <div class="cover-wrapper">
        <img v-if="!!img" ref="cover" class="cover" alt="Guild pfp" :src="img"/>
        <v-icon v-else ref="cover" class="cover">mdi-home</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavAvatar",
  props: {
    guildId: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
    img: {
      type: String,
      required: false,
      default: null
    },
    transparent: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  methods: {
    select() {
      this.$refs.selection.style.width = '8px';
      this.$refs.selection.style.height = '40px';

      this.$refs.cover.$el.style.borderRadius = '30%';

      if (!this.transparent)
        this.$refs.cover.$el.style.backgroundColor = '#5865F2FF'; //TODO: Separate light and dark mode
    },
    deselect() {
      this.$refs.selection.style.width = '0';
      this.$refs.selection.style.height = '20px';

      this.$refs.cover.$el.style.borderRadius = '50%';

      if (!this.transparent)
        this.$refs.cover.$el.style.backgroundColor = 'rgba(107,107,107,0.49)';
    },
  },
  mounted() {
    this.selected ? this.select() : this.deselect();
    this.unwatch = this.$store.watch(
        (state, getters) => getters.selectedGuild,
        (newValue, oldValue) => {
          if (newValue === this.guildId)
            this.select();
          else if (oldValue === this.guildId)
            this.deselect();
        }
    )
  },
  watch: {
    selected: function (newVal) {
      console.log("selected changed")
      newVal ? this.select() : this.deselect();
    }
  }
}
</script>

<style scoped>

.nav-avatar-wrapper {
  position: relative;
  width: 100%;
}

.flex-container {
  position: relative;
  display: flex;

  justify-content: center;
  margin-bottom: 8px;
}

.selection-wrapper {
  display: flex;

  height: 48px;
  width: 8px;

  top: 0;
  left: 0;
  position: absolute;

  margin-top: auto;
  margin-bottom: auto;

  align-items: center;
  overflow: hidden;
}

.selection {
  position: absolute;

  width: 8px;

  background-color: #FFFFFF;

  margin-left: -4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: 200ms;
}

.cover {
  width: 48px;
  height: 48px;

  background: transparent;
  border-radius: 50%;
  transition: 350ms;
}

.flex-container:hover >>> .cover {
  border-radius: 30% !important;
}

.flex-container:hover >>> .selection {
  width: 8px !important;
  height: 20px;
}

.cover-wrapper {
  margin-left: auto;
  margin-right: auto;
  width: min-content;
  height: min-content;
  cursor: pointer;
}

</style>
<template>
  <div class="component-wrapper" @click="preSelect">
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
      default: null,
    },
    onClick: {
      type: Function,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: true,
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
    preSelect() {
      this.onClick() ? this.select() : this.deselect();
    },
    select() {
      console.log("selected");

      this.$refs["selection-wrapper"].style.width = '2000px';
      this.$refs.selection.style.height = '2000px';

      this.$refs.cover.$el.style.borderRadius = '25%';
      this.$refs.cover.$el.style.backgroundColor = '#5865F2FF'; //TODO: Separate light and dark mode
    },
    deselect() {
      console.log("de--selected");

      this.$refs["selection-wrapper"].style.width = '0px';
      this.$refs.selection.style.height = '20px';

      this.$refs.cover.$el.style.borderRadius = '50%';
      this.$refs.cover.$el.style.backgroundColor = 'rgba(176,176,176,0.49)';
    },
  },
  mounted() {
    console.log("Mount", this.selected);
    if (this.selected) {
      console.log("Selected")
      this.select();
    } else {
      console.log("not - Selected")
      this.deselect();
    }
  },
}
</script>

<style scoped>

/*:root {
  --selected-width: 0;
  --selected-height: 20;
  --cover-radius: 50%;
  --cover-color: rgba(176, 176, 176, 0.88)
}*/

.component-wrapper {
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

  height: 20px;
  width: 0;

  background-color: #FFFFFF;

  margin-left: -4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: 400ms;
}

.cover {
  width: 48px;
  height: 48px;

  background: rgba(176, 176, 176, 0.88);
  border-radius: 50%;
  transition: 350ms;
}

.flex-container:hover > .cover-wrapper > .cover {
  border-radius: 25% !important;
}

.flex-container:hover > .selection-wrapper > .selection {
  display: block;
  width: 8px;
  height: 20px;
}

.cover-wrapper {
  margin-left: auto;
  margin-right: auto;
  width: min-content;
  height: min-content;
}

</style>
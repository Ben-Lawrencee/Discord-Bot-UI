<template>
  <div class="component" @click="preSelect">
    <div class="flex-container">
      <div class="selection-wrapper" aria-hidden="true">
        <span class="selection"/>
      </div>
      <div class="cover-wrapper">
        <img v-if="!!img" class="cover" alt="Guild pfp" :src="img"/>
        <v-icon v-else class="cover">mdi-home</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavAvatar",
  props: {
    img: {
      type: String,
      required: false,
      default: null
    },
    initSelected: {
      type: Boolean,
      required: false,
      default: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
    transparent: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    preSelect() {
      let changed = this.selected;

      if (this.onClick !== null)
        this.selected = this.onClick(this.selected);

      if (changed !== this.selected)
        this.selected ? this.select() : this.deselect();
    },
    select() {
      this.selected = true;
      document.documentElement.style.setProperty('--selected-height', '40px');
      document.documentElement.style.setProperty('--selected-width', '8px');
      document.documentElement.style.setProperty('--cover-radius', '25%');
      document.documentElement.style.setProperty('--cover-color', '#5865F2FF'); //TODO: Separate light and dark mode
    },
    deselect() {
      this.selected = false;
      document.documentElement.style.setProperty('--selected-height', '20px');
      document.documentElement.style.setProperty('--selected-width', '0px');
      document.documentElement.style.setProperty('--cover-radius', '50%');
      document.documentElement.style.setProperty('--cover-color', 'rgba(176,176,176,0.49)');
    },
  },
  created() {
    if (this.initSelected)
      this.select();
  },
}
</script>

<style scoped>

:root {
  --selected-width: 0;
  --selected-height: 20;
  --cover-radius: 50%;
  --cover-color: rgba(176, 176, 176, 0.88)
}

.component {
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
  height: var(--selected-height);
  width: var(--selected-width);
  background-color: #FFFFFF;
  margin-left: -4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: 400ms;
}

.cover {
  width: 48px;
  height: 48px;
  background: var(--cover-color);
  border-radius: var(--cover-radius);
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
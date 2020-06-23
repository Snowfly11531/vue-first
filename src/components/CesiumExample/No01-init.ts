import { Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line import/no-unresolved

@Component
export default class CesiumContainer extends Vue {
  // eslint-disable-next-line class-methods-use-this
  mounted() {
    // var viewer = new Cesium.CesiumWidget('cesiumContainer')

    // eslint-disable-next-line no-undef
    const viewer = new Viewer('cesiumContainer');
    // eslint-disable-next-line no-console
    console.log(viewer);
  }
}

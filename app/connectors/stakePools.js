import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectorMap } from "../fp";
import * as sel from "../selectors";
import * as spa from "../actions/StakePoolActions";

const mapStateToProps = selectorMap({
  configuredStakePools: sel.configuredStakePools,
  unconfiguredStakePools: sel.unconfiguredStakePools,
  defaultStakePool: sel.defaultStakePool
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSetStakePoolInfo: spa.setStakePoolInformation
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);

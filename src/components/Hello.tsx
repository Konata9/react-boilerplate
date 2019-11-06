import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { helloGetAction } from "@src/reducers/Hello/actions"

export interface HelloProps {
  compiler: string
  framework: string
}

@(connect(
  (state: any) => ({ helloProps: state.hello }),
  dispatch =>
    bindActionCreators(
      {
        getHello: helloGetAction
      },
      dispatch
    )
) as any)
class Hello extends React.PureComponent<any, any> {
  componentDidMount() {
    const { getHello } = this.props
    getHello()
  }

  render() {
    console.log(this.props)
    const { helloProps } = this.props
    return (
      <h1>
        Hello from {helloProps.compiler} and {helloProps.framework}
      </h1>
    )
  }
}

export default Hello

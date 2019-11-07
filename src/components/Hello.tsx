import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled from "styled-components"
import { helloGetAction } from "@src/reducers/Hello/actions"

export interface HelloProps {
  compiler: string
  framework: string
}

const Box = styled.div({
  width: "50px",
  height: "50px",
  background: "red"
})

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
        <Box />
      </h1>
    )
  }
}

export default Hello

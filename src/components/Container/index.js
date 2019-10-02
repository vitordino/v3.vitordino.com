import styled from 'styled-components'
import { above } from 'etymos'

const Container = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	max-width: 80rem;
	margin: 0 auto;
	${above('md')`
		padding-left: 2rem;
		padding-right: 2rem;
	`}
	${above('lg')`
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	`}
`

export default Container

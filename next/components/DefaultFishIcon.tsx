interface IProps {
  width?: number
  height?: number
  fill?: string
}

const DefaultFishIcon = ({
  width = 75,
  height = 75,
  fill = '#ddd',
}: IProps): JSX.Element => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 231.236 231.236"
  >
    <path
      fill={fill}
      d="M196.231,115.618c6.723-2.425,13.358-6.088,18.866-11.596c18.817-18.817,16.054-51.067,15.927-52.431l-0.385-4.131
	l-4.13-0.385c-0.089-0.008-2.206-0.202-5.576-0.202c-11.477,0-32.824,2.096-46.857,16.128c-8.031,8.031-12.123,18.506-14.175,27.985
	c-11.702-9.376-27.239-19.427-45.08-25.028c0.753-7.972,0.255-13.805,0.202-14.367l-0.385-4.131l-4.13-0.385
	c-0.089-0.008-2.206-0.202-5.576-0.202c-11.477,0-32.824,2.096-46.856,16.128c-1.757,1.757-3.325,3.631-4.725,5.586
	C21.102,82.404,2.612,111.841,1.615,113.461L0,116.083l1.615,2.622c1.306,2.12,32.592,51.927,85.488,51.927
	c29.504,0,55.533-15.582,72.972-29.591c2.107,9.267,6.192,19.385,14,27.194c14.032,14.032,35.38,16.127,46.857,16.128
	c3.37,0,5.487-0.194,5.576-0.202l4.13-0.385l0.385-4.131c0.127-1.363,2.891-33.613-15.927-52.431
	C209.589,121.706,202.954,118.043,196.231,115.618z M48.06,114.482c-4.933,0-8.932-3.999-8.932-8.932s3.999-8.932,8.932-8.932
	s8.932,3.999,8.932,8.932S52.993,114.482,48.06,114.482z"
    />
  </svg>
)

export default DefaultFishIcon

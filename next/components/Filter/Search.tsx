import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoMdSearch as SearchIcon } from 'react-icons/io'
import {
  Button,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon,
} from 'reactstrap'
import { FILTER } from '../../utility/constants'
import { isEmpty } from '../../utility/strings'
import styles from './Search.module.scss'

interface IProps {
  searchTerm: string
  applyFilter: (payload: any) => void
  removeFilter: (payload: any) => void
}

const id = 'search-input'
const Search = (props: IProps): JSX.Element => {
  const [state, setState] = useState<{ value: string }>({
    value: props.searchTerm,
  })
  const router = useRouter()

  const onChange = (event) => {
    setState({
      value: event.target.value,
    })
  }

  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }

  const onSubmit = () => {
    const { applyFilter, removeFilter } = props
    const searchTerm = state.value

    if (isEmpty(searchTerm)) {
      removeFilter({ type: FILTER.SEARCH })
    } else if (props.searchTerm !== searchTerm) {
      applyFilter({ type: FILTER.SEARCH, value: searchTerm })
      if (router.pathname !== '/stock') {
        router.push('/stock')
      }
    }
  }

  return (
    <FormGroup>
      <Label for={id} className="a11y-offscreen">
        Search
      </Label>
      <InputGroup>
        <Input
          name={id}
          id={id}
          type="text"
          data-test={id}
          value={state.value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          autoComplete={'false'}
        />
        <InputGroupAddon addonType="append">
          <Button
            id="search-submit"
            data-test="search-submit"
            className="flex items-center justify-center"
            color="primary"
            onClick={onSubmit}
          >
            <SearchIcon className={styles.icon} />
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  )
}

export default Search

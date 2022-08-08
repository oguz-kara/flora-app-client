import Table, { THead, TBody, Th, Td, Tr } from './Table';
import { forwardRef, useEffect, useRef, useState } from 'react';
import '../style/table-with-inputs.scss';

const DataCellInput = forwardRef((props, ref) => {
  const handleOnFocus = (e) => {
    props.onFocus(e);
    e.target.select();
  };
  return (
    <input
      className="data-cell-input"
      {...props}
      ref={ref}
      onFocus={handleOnFocus}
    />
  );
});

export default function TableWithInputs({ headers, initialValues }) {
  const dataRowRef = useRef([]);
  const [data, setData] = useState([initialValues]);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    if (shouldCreateNewLine()) {
      const newLine = convertToTableLine(headers);
      setData((prev) => [...prev, newLine]);
    }
  }, [data]);

  const handleInputChange = (e, id, property) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [property]: e.target.value,
        };
      }
      return item;
    });

    setData(newData);
  };

  const handleDataCellInputFocus = (e, item) => {
    setSelectedData(item);
  };

  const handleDataCellInputBlur = (e, item) => {
    setSelectedData('');
  };

  const handleDataCellInputKeydown = ({ code }) => {
    if (code === 'Delete' && data.length > 1)
      deleteItemFromData(selectedData.id);
  };

  useEffect(() => {}, [selectedData]);

  function shouldCreateNewLine() {
    const lastItem = data[data.length - 1];
    const keys = Object.keys(lastItem);
    let condition = true;
    keys.forEach((key) => {
      if (lastItem[key].length === 0) {
        condition = false;
      }
    });
    return condition;
  }

  function convertToTableLine(arr) {
    const obj = {
      id: Date.now(),
    };
    arr.forEach((item) => (obj[item] = ''));
    return obj;
  }

  function deleteItemFromData(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  function getSelectedDataStyles(id) {
    if (selectedData.id === id) return 'data-cell-input__selected-data';
  }

  if (headers === undefined || headers.length === 0)
    throw new Error('Headers prop of TableWithInputs cannot be empty!');

  return (
    <Table>
      <THead>
        <Tr>
          {headers.map((header) => (
            <Th key={header}>#{header}</Th>
          ))}
        </Tr>
      </THead>
      <TBody>
        {data.map((item) => (
          <Tr
            ref={(el) => dataRowRef.current.push(el)}
            key={item.id}
            className={getSelectedDataStyles(item.id)}
          >
            <>
              {headers.map((header, index) => (
                <Td key={index}>
                  <DataCellInput
                    value={item[header]}
                    onChange={(e) => handleInputChange(e, item.id, header)}
                    onFocus={(e) => handleDataCellInputFocus(e, item)}
                    onBlur={(e) => handleDataCellInputBlur()}
                    onKeyDown={(e) => handleDataCellInputKeydown(e)}
                  />
                </Td>
              ))}
            </>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}

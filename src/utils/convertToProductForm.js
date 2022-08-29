export default function convertToProductForm(data, units) {
  return {
    id: data.id,
    barcode: data.barcode,
    categoryId: data.categoryId,
    supplierId: data.supplierId,
    brandId: data.brandId,
    name: data.name,
    supplierPrice: data.supplierPrice,
    amount: data.amount,
    description: data.description,
    sku: data.sku,
    taxPercentage: data.taxPercentage,
    mainUnit: data.productUnitData.main.unitId,
    mainUnitPrice: data.productUnitData.main.price,
    subUnitList: data.productUnitData.sub.map((item) => ({
      value: item.unitId,
      label: units.find((unit) => unit.id === item.unitId).name,
    })),
    subUnitPriceList: data.productUnitData.sub.map((item) => ({
      id: item.unitId,
      label: units.find((unit) => unit.id === item.unitId).name,
      price: item.price,
    })),
    imageListData: data.imageSourceList.map((item, index) => ({
      src: item,
      name: index,
    })),
  };
}

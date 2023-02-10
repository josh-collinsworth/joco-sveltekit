const formatDecimal = (val: number, precision = 3): number => parseFloat(val.toFixed(precision))

export default formatDecimal
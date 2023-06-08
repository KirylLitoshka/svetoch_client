import {useMemo} from "react";

export const useFilterByStatus = (objects, searchQuery) => {
  return useMemo(() => {
    if (searchQuery.status) {
      return [...objects].filter((obj) => obj.is_closed === Boolean(+searchQuery.status))
    }
    return objects
  }, [objects, searchQuery])
}


export const useFilterByMeter = (objects, searchQuery) => {
  const filteredObjects = useFilterByStatus(objects, searchQuery)
  return useMemo(() => {
    if (searchQuery.meterNumber) {
      return [...filteredObjects].filter((obj) => {
        if (obj.meter?.number) {
          return obj.meter.number.includes(searchQuery.meterNumber)
        }
        return false
      })
    }
    return filteredObjects
  }, [filteredObjects, searchQuery])
}

export const useFilterByCountingPoint = (objects, searchQuery) => {
  const filteredObjects = useFilterByMeter(objects, searchQuery)
  return useMemo(() => {
    if (searchQuery.countingPoint) {
      return [...filteredObjects].filter((obj) => {
        if (obj.counting_point) {
          return obj.counting_point.toString().includes(searchQuery.countingPoint)
        }
        return false
      })
    }
    return filteredObjects
  }, [filteredObjects, searchQuery])
}

export const useObjects = (objects, searchQuery) => {
  const filteredObjects = useFilterByCountingPoint(objects, searchQuery)
  return useMemo(() => {
    if (searchQuery.title) {
      return [...filteredObjects].filter(obj => obj.title.toLowerCase().includes(searchQuery.title.toLowerCase()))
    }
    return filteredObjects
  }, [filteredObjects, searchQuery])
};
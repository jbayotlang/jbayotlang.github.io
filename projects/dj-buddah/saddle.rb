array = [[0, 1, 9, 3], [7, 5, 8, 3], [9, 2, 9, 4], [4, 6, 7, 1]]

def saddle(a)
  a.each_with_index do | rows, row_index |
    rows.each_with_index do | column, column_index |
      puts a[row_index][column_index]
      puts a[row_index][column_index] < 
    end
  end
end

saddle(array)
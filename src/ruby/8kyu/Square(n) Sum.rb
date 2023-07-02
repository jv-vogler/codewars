=begin 
Complete the square sum function so that it squares each number passed into it and then sums the results together.
=end

def square_sum(numbers)
  numbers.map { |num| num**2 }
         .reduce(0) { |sum, num| sum + num } 
end
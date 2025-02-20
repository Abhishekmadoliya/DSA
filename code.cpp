#include<iostream>
using namespace std;

void reversearr(int arr[], int size) {
    int start = 0;
    int end = size - 1;

    while (start < end) {
        // Swapping the elements at start and end
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

int main() {
    int arr[] = {8, 5, 6, 3, 4, 5, 6};
    int size = 7;

    reversearr(arr, size);

    // Loop to print the reversed array
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}

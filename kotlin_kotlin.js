(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_kotlin = factory(typeof kotlin_kotlin === 'undefined' ? {} : kotlin_kotlin);
}(this, function (_) {
  //region block: imports
  var imul = Math.imul;
  //endregion
  'use strict';
  //region block: pre-declaration
  State.prototype = Object.create(Enum.prototype);
  State.prototype.constructor = State;
  ListIteratorImpl.prototype = Object.create(IteratorImpl.prototype);
  ListIteratorImpl.prototype.constructor = ListIteratorImpl;
  AbstractList.prototype = Object.create(AbstractCollection.prototype);
  AbstractList.prototype.constructor = AbstractList;
  SequenceBuilderIterator.prototype = Object.create(SequenceScope.prototype);
  SequenceBuilderIterator.prototype.constructor = SequenceBuilderIterator;
  RingBuffer$iterator$1.prototype = Object.create(AbstractIterator.prototype);
  RingBuffer$iterator$1.prototype.constructor = RingBuffer$iterator$1;
  RingBuffer.prototype = Object.create(AbstractList.prototype);
  RingBuffer.prototype.constructor = RingBuffer;
  windowedIterator$slambda.prototype = Object.create(CoroutineImpl.prototype);
  windowedIterator$slambda.prototype.constructor = windowedIterator$slambda;
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  NotImplementedError.prototype = Object.create(Error_0.prototype);
  NotImplementedError.prototype.constructor = NotImplementedError;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  ListIteratorImpl_0.prototype = Object.create(IteratorImpl_0.prototype);
  ListIteratorImpl_0.prototype.constructor = ListIteratorImpl_0;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  AbstractMutableMap$keys$1.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractMutableMap$keys$1.prototype.constructor = AbstractMutableMap$keys$1;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  function createJsMap() {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  }
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  LinkedHashSet.prototype = Object.create(HashSet.prototype);
  LinkedHashSet.prototype.constructor = LinkedHashSet;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  findNext$1$groups$1.prototype = Object.create(AbstractCollection.prototype);
  findNext$1$groups$1.prototype.constructor = findNext$1$groups$1;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  _no_name_provided__1_2832250971_0.prototype = Object.create(CoroutineImpl.prototype);
  _no_name_provided__1_2832250971_0.prototype.constructor = _no_name_provided__1_2832250971_0;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NumberFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  NumberFormatException.prototype.constructor = NumberFormatException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  //endregion
  function toCollection(_this__1828080292, destination) {
    var indexedObject = _this__1828080292;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.add_1j60pz_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function indexOf(_this__1828080292, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__1828080292.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__1828080292[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__1828080292.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this__1828080292[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function contains(_this__1828080292, element) {
    return indexOf(_this__1828080292, element) >= 0;
  }
  function joinToString(_this__1828080292, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this__1828080292, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this__1828080292, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this__1828080292, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_oz4qxs_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this__1828080292;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_oz4qxs_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_oz4qxs_k$(truncated);
      Unit_getInstance();
    }
    buffer.append_oz4qxs_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function zip(_this__1828080292, other) {
    var tmp$ret$2;
    $l$block_1: {
      var first_1 = _this__1828080292.iterator_jk1svi_k$();
      var second_2 = other.iterator_jk1svi_k$();
      var tmp$ret$0;
      $l$block: {
        var tmp0_minOf_0 = collectionSizeOrDefault(_this__1828080292, 10);
        var tmp1_minOf_0 = collectionSizeOrDefault(other, 10);
        tmp$ret$0 = Math.min(tmp0_minOf_0, tmp1_minOf_0);
        break $l$block;
      }
      var list_3 = ArrayList_init_$Create$_0(tmp$ret$0);
      while (first_1.hasNext_bitz1p_k$() ? second_2.hasNext_bitz1p_k$() : false) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp2__anonymous__4_1215738846 = first_1.next_20eer_k$();
          var tmp3__anonymous__4_2723290655 = second_2.next_20eer_k$();
          tmp$ret$1 = to(tmp2__anonymous__4_1215738846, tmp3__anonymous__4_2723290655);
          break $l$block_0;
        }
        list_3.add_1j60pz_k$(tmp$ret$1);
        Unit_getInstance();
      }
      tmp$ret$2 = list_3;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function last(_this__1828080292) {
    if (_this__1828080292.isEmpty_y1axqb_k$())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this__1828080292.get_fkrdnv_k$(_get_lastIndex__339712501(_this__1828080292));
  }
  function joinToString_0(_this__1828080292, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this__1828080292, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this__1828080292, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this__1828080292, separator, prefix, postfix, limit, truncated, transform);
  }
  function chunked(_this__1828080292, size) {
    return windowed(_this__1828080292, size, size, true);
  }
  function drop(_this__1828080292, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Requested element count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
    if (n === 0)
      return toList(_this__1828080292);
    var list;
    if (isInterface(_this__1828080292, Collection)) {
      var resultSize = _this__1828080292._get_size__809037418_ddoh9m_k$() - n | 0;
      if (resultSize <= 0)
        return emptyList();
      if (resultSize === 1)
        return listOf(last_0(_this__1828080292));
      list = ArrayList_init_$Create$_0(resultSize);
      if (isInterface(_this__1828080292, List)) {
        if (isInterface(_this__1828080292, RandomAccess)) {
          var inductionVariable = n;
          var last = _this__1828080292._get_size__809037418_ddoh9m_k$();
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              list.add_1j60pz_k$(_this__1828080292.get_fkrdnv_k$(index));
              Unit_getInstance();
            }
             while (inductionVariable < last);
        } else {
          {
            var tmp$ret$1;
            $l$block_0: {
              var tmp1_iterator_0 = _this__1828080292.listIterator_5hanv9_k$(n);
              tmp$ret$1 = tmp1_iterator_0;
              break $l$block_0;
            }
            var tmp1_iterator = tmp$ret$1;
            while (tmp1_iterator.hasNext_bitz1p_k$()) {
              var item = tmp1_iterator.next_20eer_k$();
              list.add_1j60pz_k$(item);
              Unit_getInstance();
            }
          }
        }
        return list;
      } else {
      }
    } else {
      {
        list = ArrayList_init_$Create$();
      }
    }
    var count = 0;
    var tmp2_iterator = _this__1828080292.iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var item_0 = tmp2_iterator.next_20eer_k$();
      if (count >= n) {
        list.add_1j60pz_k$(item_0);
        Unit_getInstance();
      } else {
        count = count + 1 | 0;
        Unit_getInstance();
      }
    }
    return optimizeReadOnlyList(list);
  }
  function joinTo_0(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_oz4qxs_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this__1828080292.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_oz4qxs_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_oz4qxs_k$(truncated);
      Unit_getInstance();
    }
    buffer.append_oz4qxs_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function plus(_this__1828080292, element) {
    var result = ArrayList_init_$Create$_0(_this__1828080292._get_size__809037418_ddoh9m_k$() + 1 | 0);
    result.addAll_oxxjjk_k$(_this__1828080292);
    Unit_getInstance();
    result.add_1j60pz_k$(element);
    Unit_getInstance();
    return result;
  }
  function windowed(_this__1828080292, size, step, partialWindows) {
    checkWindowSizeStep(size, step);
    var tmp;
    if (isInterface(_this__1828080292, RandomAccess)) {
      tmp = isInterface(_this__1828080292, List);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var thisSize = _this__1828080292._get_size__809037418_ddoh9m_k$();
      var resultCapacity = (thisSize / step | 0) + (thisSize % step === 0 ? 0 : 1) | 0;
      var result = ArrayList_init_$Create$_0(resultCapacity);
      var index = 0;
      $l$loop: while (0 <= index ? index < thisSize : false) {
        var windowSize = coerceAtMost(size, thisSize - index | 0);
        if (windowSize < size ? !partialWindows : false)
          break $l$loop;
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var list_1 = ArrayList_init_$Create$_0(windowSize);
            {
              {
              }
              var inductionVariable = 0;
              if (inductionVariable < windowSize)
                do {
                  var index_3 = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = _this__1828080292.get_fkrdnv_k$(index_3 + index | 0);
                      break $l$block;
                    }
                    list_1.add_1j60pz_k$(tmp$ret$0);
                    Unit_getInstance();
                  }
                }
                 while (inductionVariable < windowSize);
            }
            tmp$ret$1 = list_1;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        result.add_1j60pz_k$(tmp$ret$2);
        Unit_getInstance();
        index = index + step | 0;
      }
      return result;
    } else {
    }
    var result_0 = ArrayList_init_$Create$();
    {
      var tmp0_forEach_0 = windowedIterator(_this__1828080292.iterator_jk1svi_k$(), size, step, partialWindows, false);
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = tmp0_forEach_0;
        break $l$block_2;
      }
      var tmp0_iterator_1 = tmp$ret$3;
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          result_0.add_1j60pz_k$(element_2);
          Unit_getInstance();
        }
      }
    }
    return result_0;
  }
  function toList(_this__1828080292) {
    if (isInterface(_this__1828080292, Collection)) {
      var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__1828080292, List)) {
            tmp_0 = _this__1828080292.get_fkrdnv_k$(0);
          } else {
            {
              tmp_0 = _this__1828080292.iterator_jk1svi_k$().next_20eer_k$();
            }
          }

          tmp = listOf(tmp_0);
          break;
        default:
          tmp = toMutableList(_this__1828080292);
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlyList(toMutableList_0(_this__1828080292));
  }
  function last_0(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    if (isInterface(tmp0_subject, List))
      return last(_this__1828080292);
    else {
      {
        var iterator = _this__1828080292.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var last_0 = iterator.next_20eer_k$();
        while (iterator.hasNext_bitz1p_k$())
          last_0 = iterator.next_20eer_k$();
        return last_0;
      }
    }
  }
  function toMutableList(_this__1828080292) {
    return ArrayList_init_$Create$_1(_this__1828080292);
  }
  function toMutableList_0(_this__1828080292) {
    if (isInterface(_this__1828080292, Collection))
      return toMutableList(_this__1828080292);
    else {
    }
    return toCollection_0(_this__1828080292, ArrayList_init_$Create$());
  }
  function toCollection_0(_this__1828080292, destination) {
    var tmp0_iterator = _this__1828080292.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      destination.add_1j60pz_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function toSet(_this__1828080292) {
    if (isInterface(_this__1828080292, Collection)) {
      var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__1828080292, List)) {
            tmp_0 = _this__1828080292.get_fkrdnv_k$(0);
          } else {
            {
              tmp_0 = _this__1828080292.iterator_jk1svi_k$().next_20eer_k$();
            }
          }

          tmp = setOf(tmp_0);
          break;
        default:
          tmp = toCollection_0(_this__1828080292, LinkedHashSet_init_$Create$_0(mapCapacity(_this__1828080292._get_size__809037418_ddoh9m_k$())));
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlySet(toCollection_0(_this__1828080292, LinkedHashSet_init_$Create$()));
  }
  function asSequence(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_2832250971(_this__1828080292);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function single(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    if (isInterface(tmp0_subject, List))
      return single_0(_this__1828080292);
    else {
      {
        var iterator = _this__1828080292.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single = iterator.next_20eer_k$();
        if (iterator.hasNext_bitz1p_k$())
          throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
        return single;
      }
    }
  }
  function single_0(_this__1828080292) {
    var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this__1828080292.get_fkrdnv_k$(0);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function _no_name_provided__1_2832250971($this_asSequence) {
    this.$this_asSequence_1 = $this_asSequence;
  }
  _no_name_provided__1_2832250971.prototype.iterator_2_syqo9r_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this.$this_asSequence_1.iterator_jk1svi_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1_2832250971.prototype.iterator_jk1svi_k$ = function () {
    return this.iterator_2_syqo9r_k$();
  };
  _no_name_provided__1_2832250971.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Sequence]
  };
  function until(_this__1828080292, to) {
    if (to <= IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$())
      return Companion_getInstance_4()._get_EMPTY__2261257284_xmtgos_k$();
    return numberRangeToNumber(_this__1828080292, to - 1 | 0);
  }
  function coerceAtMost(_this__1828080292, maximumValue) {
    return _this__1828080292 > maximumValue ? maximumValue : _this__1828080292;
  }
  function coerceAtLeast(_this__1828080292, minimumValue) {
    return _this__1828080292 < minimumValue ? minimumValue : _this__1828080292;
  }
  function coerceIn(_this__1828080292, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this__1828080292 < minimumValue)
      return minimumValue;
    if (_this__1828080292 > maximumValue)
      return maximumValue;
    return _this__1828080292;
  }
  function downTo(_this__1828080292, to) {
    return Companion_getInstance_3().fromClosedRange_vhxzyy_k$(_this__1828080292, to, -1);
  }
  function take(_this__1828080292, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Requested element count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
    var tmp;
    if (n === 0) {
      tmp = emptySequence();
    } else {
      if (isInterface(_this__1828080292, DropTakeSequence)) {
        tmp = _this__1828080292.take_fj41k6_k$(n);
      } else {
        {
          tmp = new TakeSequence(_this__1828080292, n);
        }
      }
    }
    return tmp;
  }
  function map(_this__1828080292, transform) {
    return new TransformingSequence(_this__1828080292, transform);
  }
  function toList_0(_this__1828080292) {
    return optimizeReadOnlyList(toMutableList_1(_this__1828080292));
  }
  function toMutableList_1(_this__1828080292) {
    return toCollection_1(_this__1828080292, ArrayList_init_$Create$());
  }
  function toCollection_1(_this__1828080292, destination) {
    var tmp0_iterator = _this__1828080292.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      destination.add_1j60pz_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function drop_0(_this__1828080292, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Requested character count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_substring_0 = coerceAtMost(n, _this__1828080292.length);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this__1828080292;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.substring(tmp1_substring_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_1(it);
    };
  }
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2ehdt1_k$ = function (element) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals_0(element_2, element);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_jr3fla_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2ehdt1_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_y1axqb_k$ = function () {
    return this._get_size__809037418_ddoh9m_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, AbstractCollection$toString$lambda(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function tryToComputeNext($this) {
    $this.state_1 = State_Failed_getInstance();
    $this.computeNext_o7tvnd_k$();
    return $this.state_1.equals(State_Ready_getInstance());
  }
  function AbstractIterator() {
    this.state_1 = State_NotReady_getInstance();
    this.nextValue_1 = null;
  }
  AbstractIterator.prototype.hasNext_bitz1p_k$ = function () {
    {
      var tmp0_require_0 = !this.state_1.equals(State_Failed_getInstance());
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_2 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_2(message_2));
        }
      }
    }
    var tmp0_subject = this.state_1;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    switch (tmp0) {
      case 2:
        return false;
      case 0:
        return true;
      default:
        return tryToComputeNext(this);
    }
  };
  AbstractIterator.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    this.state_1 = State_NotReady_getInstance();
    var tmp = this.nextValue_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  AbstractIterator.prototype.setNext_bbb8ah_k$ = function (value) {
    this.nextValue_1 = value;
    this.state_1 = State_Ready_getInstance();
  };
  AbstractIterator.prototype.done_wt4c7j_k$ = function () {
    this.state_1 = State_Done_getInstance();
  };
  AbstractIterator.$metadata$ = {
    simpleName: 'AbstractIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  var State_Ready_instance;
  var State_NotReady_instance;
  var State_Done_instance;
  var State_Failed_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_Ready_instance = new State('Ready', 0);
    State_NotReady_instance = new State('NotReady', 1);
    State_Done_instance = new State('Done', 2);
    State_Failed_instance = new State('Failed', 3);
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  State.$metadata$ = {
    simpleName: 'State',
    kind: 'class',
    interfaces: []
  };
  function State_Ready_getInstance() {
    State_initEntries();
    return State_Ready_instance;
  }
  function State_NotReady_getInstance() {
    State_initEntries();
    return State_NotReady_instance;
  }
  function State_Done_getInstance() {
    State_initEntries();
    return State_Done_instance;
  }
  function State_Failed_getInstance() {
    State_initEntries();
    return State_Failed_instance;
  }
  function IteratorImpl($outer) {
    this.$this_1 = $outer;
    this.index_1 = 0;
  }
  IteratorImpl.prototype._set_index__964833971_tqmhb1_k$ = function (_set____804775014) {
    this.index_1 = _set____804775014;
  };
  IteratorImpl.prototype.hasNext_bitz1p_k$ = function () {
    return this.index_1 < this.$this_1._get_size__809037418_ddoh9m_k$();
  };
  IteratorImpl.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.index_1;
    tmp0_this.index_1 = tmp1 + 1 | 0;
    return this.$this_1.get_fkrdnv_k$(tmp1);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [Iterator]
  };
  function ListIteratorImpl($outer, index) {
    this.$this_2 = $outer;
    IteratorImpl.call(this, $outer);
    Companion_getInstance().checkPositionIndex_kxpgsw_k$(index, this.$this_2._get_size__809037418_ddoh9m_k$());
    this._set_index__964833971_tqmhb1_k$(index);
  }
  ListIteratorImpl.$metadata$ = {
    simpleName: 'ListIteratorImpl',
    kind: 'class',
    interfaces: [ListIterator]
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.checkElementIndex_ux0wz1_k$ = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.checkPositionIndex_kxpgsw_k$ = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.checkRangeIndexes_5hjybp_k$ = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  Companion.prototype.orderedHashCode_2n0xp_k$ = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator.next_20eer_k$();
      var tmp = imul(31, hashCode_0);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion.prototype.orderedEquals_40uhas_k$ = function (c, other) {
    if (!(c._get_size__809037418_ddoh9m_k$() === other._get_size__809037418_ddoh9m_k$()))
      return false;
    var otherIterator = other.iterator_jk1svi_k$();
    var tmp0_iterator = c.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var elem = tmp0_iterator.next_20eer_k$();
      var elemOther = otherIterator.next_20eer_k$();
      if (!equals_0(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AbstractList() {
    Companion_getInstance();
    AbstractCollection.call(this);
  }
  AbstractList.prototype.iterator_jk1svi_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractList.prototype.listIterator_5hanv9_k$ = function (index) {
    return new ListIteratorImpl(this, index);
  };
  AbstractList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals_40uhas_k$(this, other);
  };
  AbstractList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_2n0xp_k$(this);
  };
  AbstractList.$metadata$ = {
    simpleName: 'AbstractList',
    kind: 'class',
    interfaces: [List]
  };
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_1(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_firstOrNull_0 = $this._get_entries__31877249_iz8n5_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = equals_0(element_2._get_key__857139730_e6bh8y_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.entryHashCode_6enkgc_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp2_safe_receiver_4 = e._get_key__857139730_e6bh8y_k$();
        var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
        var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
        var tmp0_safe_receiver_6 = e._get_value__3683422336_a43j40_k$();
        var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
        tmp$ret$0 = tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_0.prototype.entryToString_sxv7wb_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = toString_1(e._get_key__857139730_e6bh8y_k$()) + '=' + toString_1(e._get_value__3683422336_a43j40_k$());
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_0.prototype.entryEquals_sgqdyf_k$ = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_0(e._get_key__857139730_e6bh8y_k$(), other._get_key__857139730_e6bh8y_k$()) ? equals_0(e._get_value__3683422336_a43j40_k$(), other._get_value__3683422336_a43j40_k$()) : false;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.toString_rmr516_k$(it);
    };
  }
  function AbstractMap() {
    Companion_getInstance_0();
    this._keys_1 = null;
    this._values_1 = null;
  }
  AbstractMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_lxbt7v_k$ = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__857139730_e6bh8y_k$();
    var value = entry._get_value__3683422336_a43j40_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (isInterface(this, Map) ? this : THROW_CCE()).get_1mhr4y_k$(key);
      break $l$block;
    }
    var ourValue = tmp$ret$0;
    if (!equals_0(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (isInterface(this, Map) ? this : THROW_CCE()).containsKey_wgk31w_k$(key);
        break $l$block_0;
      }
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map) : false))
      return false;
    else {
    }
    if (!(this._get_size__809037418_ddoh9m_k$() === other._get_size__809037418_ddoh9m_k$()))
      return false;
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_all_0 = other._get_entries__31877249_iz8n5_k$();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.containsEntry_lxbt7v_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_1mhr4y_k$ = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3683422336_a43j40_k$();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__31877249_iz8n5_k$());
  };
  AbstractMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this._get_size__809037418_ddoh9m_k$() === 0;
  };
  AbstractMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this._get_entries__31877249_iz8n5_k$()._get_size__809037418_ddoh9m_k$();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__31877249_iz8n5_k$();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, AbstractMap$toString$lambda(this), 24, null);
  };
  AbstractMap.prototype.toString_rmr516_k$ = function (entry) {
    return toString(this, entry._get_key__857139730_e6bh8y_k$()) + '=' + toString(this, entry._get_value__3683422336_a43j40_k$());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map]
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.unorderedHashCode_hl8x0c_k$ = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion_1.prototype.setEquals_mwtoa3_k$ = function (c, other) {
    if (!(c._get_size__809037418_ddoh9m_k$() === other._get_size__809037418_ddoh9m_k$()))
      return false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = c.containsAll_jr3fla_k$(other);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _get_lastIndex__339712501(_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.serialVersionUID_1 = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_y1axqb_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_y1axqb_k$ = function () {
    return true;
  };
  EmptyList.prototype.containsAll_4bfz49_k$ = function (elements) {
    return elements.isEmpty_y1axqb_k$();
  };
  EmptyList.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_4bfz49_k$(elements);
  };
  EmptyList.prototype.get_fkrdnv_k$ = function (index) {
    throw IndexOutOfBoundsException_init_$Create$("Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_jk1svi_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.prototype.listIterator_5hanv9_k$ = function (index) {
    if (!(index === 0))
      throw IndexOutOfBoundsException_init_$Create$('Index: ' + index);
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function optimizeReadOnlyList(_this__1828080292) {
    var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__1828080292.get_fkrdnv_k$(0));
      default:
        return _this__1828080292;
    }
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_bitz1p_k$ = function () {
    return false;
  };
  EmptyIterator.prototype.next_20eer_k$ = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function _get_indices__2241594442(_this__1828080292) {
    return numberRangeToNumber(0, _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0);
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function ArrayAsCollection(values, isVarargs) {
    this.values_1 = values;
    this.isVarargs_1 = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.values_1.length;
  };
  ArrayAsCollection.prototype.isEmpty_y1axqb_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this.values_1;
      tmp$ret$0 = tmp0_isEmpty_0.length === 0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.contains_2ehdtg_k$ = function (element) {
    return contains(this.values_1, element);
  };
  ArrayAsCollection.prototype.containsAll_jr3fy7_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2ehdtg_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_jr3fy7_k$(elements);
  };
  ArrayAsCollection.prototype.iterator_jk1svi_k$ = function () {
    return arrayIterator(this.values_1);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function collectionSizeOrDefault(_this__1828080292, default_0) {
    var tmp;
    if (isInterface(_this__1828080292, Collection)) {
      tmp = _this__1828080292._get_size__809037418_ddoh9m_k$();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function mapOf(pairs) {
    return pairs.length > 0 ? toMap(pairs, LinkedHashMap_init_$Create$_1(mapCapacity(pairs.length))) : emptyMap();
  }
  function toMap(_this__1828080292, destination) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        putAll(destination, _this__1828080292);
      }
      tmp$ret$0 = destination;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map) ? tmp : THROW_CCE();
  }
  function putAll(_this__1828080292, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1_7eebsc_k$();
      var value = tmp1_loop_parameter.component2_7eebsb_k$();
      _this__1828080292.put_3mhbri_k$(key, value);
      Unit_getInstance();
    }
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this.serialVersionUID_1 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map) : false) {
      tmp = other.isEmpty_y1axqb_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return 0;
  };
  EmptyMap.prototype.isEmpty_y1axqb_k$ = function () {
    return true;
  };
  EmptyMap.prototype.containsKey_v2r3nj_k$ = function (key) {
    return false;
  };
  EmptyMap.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    else {
    }
    return this.containsKey_v2r3nj_k$((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.get_eccq09_k$ = function (key) {
    return null;
  };
  EmptyMap.prototype.get_1mhr4y_k$ = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    else {
    }
    return this.get_eccq09_k$((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.$metadata$ = {
    simpleName: 'EmptyMap',
    kind: 'object',
    interfaces: [Map, Serializable]
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function addAll(_this__1828080292, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this__1828080292.addAll_oxxjjk_k$(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
          var item = tmp1_iterator.next_20eer_k$();
          if (_this__1828080292.add_1j60pz_k$(item))
            result = true;
        }
        return result;
      }
    }
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function SequenceScope() {
  }
  SequenceScope.$metadata$ = {
    simpleName: 'SequenceScope',
    kind: 'class',
    interfaces: []
  };
  function iterator(block) {
    var iterator = new SequenceBuilderIterator();
    iterator.nextStep_1 = createCoroutineUnintercepted(block, iterator, iterator);
    return iterator;
  }
  function nextNotReady($this) {
    if (!$this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    else
      return $this.next_20eer_k$();
  }
  function exceptionalState($this) {
    var tmp0_subject = $this.state_1;
    switch (tmp0_subject) {
      case 4:
        return NoSuchElementException_init_$Create$();
      case 5:
        return IllegalStateException_init_$Create$('Iterator has failed.');
      default:
        return IllegalStateException_init_$Create$('Unexpected state of the iterator: ' + $this.state_1);
    }
  }
  function SequenceBuilderIterator() {
    SequenceScope.call(this);
    this.state_1 = 0;
    this.nextValue_1 = null;
    this.nextIterator_1 = null;
    this.nextStep_1 = null;
  }
  SequenceBuilderIterator.prototype.hasNext_bitz1p_k$ = function () {
    while (true) {
      var tmp0_subject = this.state_1;
      switch (tmp0_subject) {
        case 0:
          break;
        case 1:
          if (ensureNotNull(this.nextIterator_1).hasNext_bitz1p_k$()) {
            this.state_1 = 2;
            return true;
          } else {
            this.nextIterator_1 = null;
          }

          break;
        case 4:
          return false;
        case 3:
        case 2:
          return true;
        default:
          throw exceptionalState(this);
      }
      this.state_1 = 5;
      var step = ensureNotNull(this.nextStep_1);
      this.nextStep_1 = null;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_success_0 = Companion_getInstance_2();
          tmp$ret$0 = _Result___init__impl__2241242780(Unit_getInstance());
          break $l$block;
        }
        tmp$ret$1 = step.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block_0;
      }
    }
  };
  SequenceBuilderIterator.prototype.next_20eer_k$ = function () {
    var tmp0_subject = this.state_1;
    switch (tmp0_subject) {
      case 0:
      case 1:
        return nextNotReady(this);
      case 2:
        this.state_1 = 1;
        return ensureNotNull(this.nextIterator_1).next_20eer_k$();
      case 3:
        this.state_1 = 0;
        var tmp = this.nextValue_1;
        var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        this.nextValue_1 = null;
        return result;
      default:
        throw exceptionalState(this);
    }
  };
  SequenceBuilderIterator.prototype.yield_24z9an_k$ = function (value, $cont) {
    this.nextValue_1 = value;
    this.state_1 = 3;
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_2495602521 = $cont;
      this.nextStep_1 = tmp0__anonymous__1_2495602521;
      tmp$ret$0 = _get_COROUTINE_SUSPENDED__2870145053();
      break $l$block;
    }
    return tmp$ret$0;
  };
  SequenceBuilderIterator.prototype.resumeWith_k14j9i_k$ = function (result) {
    var tmp$ret$0;
    $l$block: {
      throwOnFailure(result);
      var tmp = _Result___get_value__impl__3597185688(result);
      tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      break $l$block;
    }
    this.state_1 = 4;
  };
  SequenceBuilderIterator.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_k14j9i_k$(result);
  };
  SequenceBuilderIterator.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  SequenceBuilderIterator.$metadata$ = {
    simpleName: 'SequenceBuilderIterator',
    kind: 'class',
    interfaces: [Iterator, Continuation]
  };
  function generateSequence(seedFunction, nextFunction) {
    return new GeneratorSequence(seedFunction, nextFunction);
  }
  function calcNext($this) {
    $this.nextItem_1 = $this.nextState_1 === -2 ? $this.this$0__1.getInitialValue_1() : $this.this$0__1.getNextValue_1(ensureNotNull($this.nextItem_1));
    $this.nextState_1 = $this.nextItem_1 == null ? 0 : 1;
  }
  function GeneratorSequence$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.nextItem_1 = null;
    this.nextState_1 = -2;
  }
  GeneratorSequence$iterator$1.prototype.next_20eer_k$ = function () {
    if (this.nextState_1 < 0)
      calcNext(this);
    if (this.nextState_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.nextItem_1;
    var result = isObject(tmp) ? tmp : THROW_CCE();
    this.nextState_1 = -1;
    return result;
  };
  GeneratorSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    if (this.nextState_1 < 0)
      calcNext(this);
    return this.nextState_1 === 1;
  };
  GeneratorSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function GeneratorSequence(getInitialValue, getNextValue) {
    this.getInitialValue_1 = getInitialValue;
    this.getNextValue_1 = getNextValue;
  }
  GeneratorSequence.prototype.iterator_jk1svi_k$ = function () {
    return new GeneratorSequence$iterator$1(this);
  };
  GeneratorSequence.$metadata$ = {
    simpleName: 'GeneratorSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function emptySequence() {
    return EmptySequence_getInstance();
  }
  function DropTakeSequence() {
  }
  DropTakeSequence.$metadata$ = {
    simpleName: 'DropTakeSequence',
    kind: 'interface',
    interfaces: [Sequence]
  };
  function TakeSequence$iterator$1(this$0) {
    this.left_1 = this$0.count_1;
    this.iterator_1 = this$0.sequence_1.iterator_jk1svi_k$();
  }
  TakeSequence$iterator$1.prototype.next_20eer_k$ = function () {
    if (this.left_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.left_1;
    tmp0_this.left_1 = tmp1 - 1 | 0;
    Unit_getInstance();
    return this.iterator_1.next_20eer_k$();
  };
  TakeSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.left_1 > 0 ? this.iterator_1.hasNext_bitz1p_k$() : false;
  };
  TakeSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TakeSequence(sequence, count) {
    this.sequence_1 = sequence;
    this.count_1 = count;
    {
      var tmp0_require_0 = this.count_1 >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'count must be non-negative, but was ' + this.count_1 + '.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
  }
  TakeSequence.prototype.take_fj41k6_k$ = function (n) {
    return n >= this.count_1 ? this : new TakeSequence(this.sequence_1, n);
  };
  TakeSequence.prototype.iterator_jk1svi_k$ = function () {
    return new TakeSequence$iterator$1(this);
  };
  TakeSequence.$metadata$ = {
    simpleName: 'TakeSequence',
    kind: 'class',
    interfaces: [Sequence, DropTakeSequence]
  };
  function TransformingSequence$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.iterator_1 = this$0.sequence_1.iterator_jk1svi_k$();
  }
  TransformingSequence$iterator$1.prototype.next_20eer_k$ = function () {
    return this.this$0__1.transformer_1(this.iterator_1.next_20eer_k$());
  };
  TransformingSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.iterator_1.hasNext_bitz1p_k$();
  };
  TransformingSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this.sequence_1 = sequence;
    this.transformer_1 = transformer;
  }
  TransformingSequence.prototype.iterator_jk1svi_k$ = function () {
    return new TransformingSequence$iterator$1(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function EmptySequence() {
    EmptySequence_instance = this;
  }
  EmptySequence.prototype.iterator_jk1svi_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptySequence.prototype.take_fj41k6_k$ = function (n) {
    return EmptySequence_getInstance();
  };
  EmptySequence.$metadata$ = {
    simpleName: 'EmptySequence',
    kind: 'object',
    interfaces: [Sequence, DropTakeSequence]
  };
  var EmptySequence_instance;
  function EmptySequence_getInstance() {
    if (EmptySequence_instance == null)
      new EmptySequence();
    return EmptySequence_instance;
  }
  function EmptySet() {
    EmptySet_instance = this;
    this.serialVersionUID_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_y1axqb_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_y1axqb_k$ = function () {
    return true;
  };
  EmptySet.prototype.containsAll_4bfz49_k$ = function (elements) {
    return elements.isEmpty_y1axqb_k$();
  };
  EmptySet.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_4bfz49_k$(elements);
  };
  EmptySet.prototype.iterator_jk1svi_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function emptySet() {
    return EmptySet_getInstance();
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$(mapCapacity(elements.length)));
  }
  function optimizeReadOnlySet(_this__1828080292) {
    var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__1828080292.iterator_jk1svi_k$().next_20eer_k$());
      default:
        return _this__1828080292;
    }
  }
  function checkWindowSizeStep(size, step) {
    {
      var tmp0_require_0 = size > 0 ? step > 0 : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = !(size === step) ? 'Both size ' + size + ' and step ' + step + ' must be greater than zero.' : 'size ' + size + ' must be greater than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
  }
  function windowedIterator(iterator_0, size, step, partialWindows, reuseBuffer) {
    if (!iterator_0.hasNext_bitz1p_k$())
      return EmptyIterator_getInstance();
    return iterator(windowedIterator$slambda_0(size, step, iterator_0, reuseBuffer, partialWindows, null));
  }
  function RingBuffer_init_$Init$(capacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(capacity), null);
      break $l$block;
    }
    RingBuffer.call($this, tmp$ret$0, 0);
    return $this;
  }
  function RingBuffer_init_$Create$(capacity) {
    return RingBuffer_init_$Init$(capacity, Object.create(RingBuffer.prototype));
  }
  function RingBuffer$iterator$1(this$0) {
    this.this$0__1 = this$0;
    AbstractIterator.call(this);
    this.count_1 = this$0.size_1;
    this.index_1 = this$0.startIndex_1;
  }
  RingBuffer$iterator$1.prototype.computeNext_o7tvnd_k$ = function () {
    if (this.count_1 === 0) {
      this.done_wt4c7j_k$();
    } else {
      var tmp = this.this$0__1.buffer_1[this.index_1];
      this.setNext_bbb8ah_k$((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      var tmp_0 = this;
      var tmp$ret$0;
      $l$block: {
        var tmp0_forward_0 = this.index_1;
        tmp$ret$0 = (tmp0_forward_0 + 1 | 0) % this.this$0__1.capacity_1;
        break $l$block;
      }
      tmp_0.index_1 = tmp$ret$0;
      var tmp0_this = this;
      var tmp1 = tmp0_this.count_1;
      tmp0_this.count_1 = tmp1 - 1 | 0;
      Unit_getInstance();
    }
  };
  RingBuffer$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function RingBuffer(buffer, filledSize) {
    AbstractList.call(this);
    this.buffer_1 = buffer;
    {
      var tmp0_require_0 = filledSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'ring buffer filled size should not be negative but it is ' + filledSize;
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
    {
      var tmp1_require_0 = filledSize <= this.buffer_1.length;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'ring buffer filled size: ' + filledSize + ' cannot be larger than the buffer size: ' + this.buffer_1.length;
          break $l$block_0;
        }
        var message_2_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2_0));
      }
    }
    this.capacity_1 = this.buffer_1.length;
    this.startIndex_1 = 0;
    this.size_1 = filledSize;
  }
  RingBuffer.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  RingBuffer.prototype.get_fkrdnv_k$ = function (index) {
    Companion_getInstance().checkElementIndex_ux0wz1_k$(index, this.size_1);
    var tmp$ret$0;
    $l$block: {
      var tmp0_forward_0 = this.startIndex_1;
      tmp$ret$0 = (tmp0_forward_0 + index | 0) % this.capacity_1;
      break $l$block;
    }
    var tmp = this.buffer_1[tmp$ret$0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  RingBuffer.prototype.isFull_jiu7tz_k$ = function () {
    return this.size_1 === this.capacity_1;
  };
  RingBuffer.prototype.iterator_jk1svi_k$ = function () {
    return new RingBuffer$iterator$1(this);
  };
  RingBuffer.prototype.toArray_nu7pb_k$ = function (array) {
    var tmp;
    if (array.length < this.size_1) {
      tmp = copyOf(array, this.size_1);
    } else {
      tmp = isArray(array) ? array : THROW_CCE();
    }
    var result = tmp;
    var size = this.size_1;
    var widx = 0;
    var idx = this.startIndex_1;
    while (widx < size ? idx < this.capacity_1 : false) {
      var tmp_0 = widx;
      var tmp_1 = this.buffer_1[idx];
      result[tmp_0] = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = widx;
      widx = tmp0 + 1 | 0;
      Unit_getInstance();
      var tmp1 = idx;
      idx = tmp1 + 1 | 0;
      Unit_getInstance();
    }
    idx = 0;
    while (widx < size) {
      var tmp_2 = widx;
      var tmp_3 = this.buffer_1[idx];
      result[tmp_2] = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp2 = widx;
      widx = tmp2 + 1 | 0;
      Unit_getInstance();
      var tmp3 = idx;
      idx = tmp3 + 1 | 0;
      Unit_getInstance();
    }
    if (result.length > this.size_1)
      result[this.size_1] = null;
    return isArray(result) ? result : THROW_CCE();
  };
  RingBuffer.prototype.toArray_jjyjqa_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_arrayOfNulls_0 = this.size_1;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
      break $l$block;
    }
    return this.toArray_nu7pb_k$(tmp$ret$0);
  };
  RingBuffer.prototype.toArray = function () {
    return this.toArray_jjyjqa_k$();
  };
  RingBuffer.prototype.expanded_i26rmg_k$ = function (maxCapacity) {
    var newCapacity = coerceAtMost((this.capacity_1 + (this.capacity_1 >> 1) | 0) + 1 | 0, maxCapacity);
    var tmp;
    if (this.startIndex_1 === 0) {
      tmp = copyOf(this.buffer_1, newCapacity);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
        break $l$block;
      }
      tmp = this.toArray_nu7pb_k$(tmp$ret$0);
    }
    var newBuffer = tmp;
    return new RingBuffer(newBuffer, this.size_1);
  };
  RingBuffer.prototype.add_sf7wgr_k$ = function (element) {
    if (this.isFull_jiu7tz_k$()) {
      throw IllegalStateException_init_$Create$('ring buffer is full');
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_forward_0 = this.startIndex_1;
      var tmp1_forward_0 = this.size_1;
      tmp$ret$0 = (tmp0_forward_0 + tmp1_forward_0 | 0) % this.capacity_1;
      break $l$block;
    }
    this.buffer_1[tmp$ret$0] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.size_1;
    tmp0_this.size_1 = tmp1 + 1 | 0;
    Unit_getInstance();
  };
  RingBuffer.prototype.removeFirst_83ctyc_k$ = function (n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = "n shouldn't be negative but it is " + n;
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
    {
      var tmp1_require_0 = n <= this.size_1;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = "n shouldn't be greater than the buffer size: n = " + n + ', size = ' + this.size_1;
          break $l$block_0;
        }
        var message_2_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2_0));
      }
    }
    if (n > 0) {
      var start = this.startIndex_1;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = (start + n | 0) % this.capacity_1;
        break $l$block_1;
      }
      var end = tmp$ret$2;
      if (start > end) {
        fill(this.buffer_1, null, start, this.capacity_1);
        fill(this.buffer_1, null, 0, end);
      } else {
        fill(this.buffer_1, null, start, end);
      }
      this.startIndex_1 = end;
      var tmp0_this = this;
      tmp0_this.size_1 = tmp0_this.size_1 - n | 0;
    }
  };
  RingBuffer.$metadata$ = {
    simpleName: 'RingBuffer',
    kind: 'class',
    interfaces: [RandomAccess]
  };
  function windowedIterator$slambda($size, $step, $iterator, $reuseBuffer, $partialWindows, resultContinuation) {
    this.$size_1 = $size;
    this.$step_1 = $step;
    this.$iterator_1 = $iterator;
    this.$reuseBuffer_1 = $reuseBuffer;
    this.$partialWindows_1 = $partialWindows;
    CoroutineImpl.call(this, resultContinuation);
  }
  windowedIterator$slambda.prototype.invoke_gclp42_k$ = function ($this$iterator, $cont) {
    var tmp = this.create_z48b41_k$($this$iterator, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  windowedIterator$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_gclp42_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $cont);
  };
  windowedIterator$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(21);
            this.bufferInitialCapacity0__1 = coerceAtMost(this.$size_1, 1024);
            this.gap1__1 = this.$step_1 - this.$size_1 | 0;
            if (this.gap1__1 >= 0) {
              this.buffer2__1 = ArrayList_init_$Create$_0(this.bufferInitialCapacity0__1);
              this.skip3__1 = 0;
              var tmp_0 = this;
              tmp_0.tmp0_iterator4__1 = this.$iterator_1;
              this._set_state__1256591060_i39zdo_k$(12);
              continue $sm;
            } else {
              this.buffer5__1 = RingBuffer_init_$Create$(this.bufferInitialCapacity0__1);
              var tmp_1 = this;
              tmp_1.tmp1_iterator6__1 = this.$iterator_1;
              this._set_state__1256591060_i39zdo_k$(1);
              continue $sm;
            }

            break;
          case 1:
            if (!this.tmp1_iterator6__1.hasNext_bitz1p_k$()) {
              this._set_state__1256591060_i39zdo_k$(5);
              continue $sm;
            }

            this.e7__1 = this.tmp1_iterator6__1.next_20eer_k$();
            this.buffer5__1.add_sf7wgr_k$(this.e7__1);
            if (this.buffer5__1.isFull_jiu7tz_k$()) {
              if (this.buffer5__1.size_1 < this.$size_1) {
                this.buffer5__1 = this.buffer5__1.expanded_i26rmg_k$(this.$size_1);
                this._set_state__1256591060_i39zdo_k$(1);
                continue $sm;
              } else {
                this._set_state__1256591060_i39zdo_k$(2);
                continue $sm;
              }
            } else {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            break;
          case 2:
            this._set_state__1256591060_i39zdo_k$(3);
            suspendResult = this.$this$iterator_1.yield_24z9an_k$(this.$reuseBuffer_1 ? this.buffer5__1 : ArrayList_init_$Create$_1(this.buffer5__1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.buffer5__1.removeFirst_83ctyc_k$(this.$step_1);
            this._set_state__1256591060_i39zdo_k$(4);
            continue $sm;
          case 4:
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 5:
            if (this.$partialWindows_1) {
              this._set_state__1256591060_i39zdo_k$(6);
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(11);
              continue $sm;
            }

            break;
          case 6:
            if (!(this.buffer5__1.size_1 > this.$step_1)) {
              this._set_state__1256591060_i39zdo_k$(8);
              continue $sm;
            }

            this._set_state__1256591060_i39zdo_k$(7);
            suspendResult = this.$this$iterator_1.yield_24z9an_k$(this.$reuseBuffer_1 ? this.buffer5__1 : ArrayList_init_$Create$_1(this.buffer5__1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.buffer5__1.removeFirst_83ctyc_k$(this.$step_1);
            this._set_state__1256591060_i39zdo_k$(6);
            continue $sm;
          case 8:
            var tmp_2 = this;
            tmp_2.tmp1_isNotEmpty_08__1 = this.buffer5__1;
            if (!this.tmp1_isNotEmpty_08__1.isEmpty_y1axqb_k$()) {
              this._set_state__1256591060_i39zdo_k$(9);
              suspendResult = this.$this$iterator_1.yield_24z9an_k$(this.buffer5__1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              {
                this._set_state__1256591060_i39zdo_k$(10);
                continue $sm;
              }
            }

            break;
          case 9:
            this._set_state__1256591060_i39zdo_k$(10);
            continue $sm;
          case 10:
            this._set_state__1256591060_i39zdo_k$(11);
            continue $sm;
          case 11:
            this._set_state__1256591060_i39zdo_k$(20);
            continue $sm;
          case 12:
            if (!this.tmp0_iterator4__1.hasNext_bitz1p_k$()) {
              this._set_state__1256591060_i39zdo_k$(16);
              continue $sm;
            }

            this.e9__1 = this.tmp0_iterator4__1.next_20eer_k$();
            if (this.skip3__1 > 0) {
              this.skip3__1 = this.skip3__1 - 1 | 0;
              this._set_state__1256591060_i39zdo_k$(12);
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(13);
              continue $sm;
            }

            break;
          case 13:
            this.buffer2__1.add_1j60pz_k$(this.e9__1);
            Unit_getInstance();
            if (this.buffer2__1._get_size__809037418_ddoh9m_k$() === this.$size_1) {
              this._set_state__1256591060_i39zdo_k$(14);
              suspendResult = this.$this$iterator_1.yield_24z9an_k$(this.buffer2__1, this);
              if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this._set_state__1256591060_i39zdo_k$(15);
              continue $sm;
            }

            break;
          case 14:
            if (this.$reuseBuffer_1)
              this.buffer2__1.clear_j9y8zo_k$();
            else
              this.buffer2__1 = ArrayList_init_$Create$_0(this.$size_1);
            this.skip3__1 = this.gap1__1;
            this._set_state__1256591060_i39zdo_k$(15);
            continue $sm;
          case 15:
            this._set_state__1256591060_i39zdo_k$(12);
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.tmp0_isNotEmpty_010__1 = this.buffer2__1;
            if (!this.tmp0_isNotEmpty_010__1.isEmpty_y1axqb_k$()) {
              if (this.$partialWindows_1 ? true : this.buffer2__1._get_size__809037418_ddoh9m_k$() === this.$size_1) {
                this._set_state__1256591060_i39zdo_k$(17);
                suspendResult = this.$this$iterator_1.yield_24z9an_k$(this.buffer2__1, this);
                if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this._set_state__1256591060_i39zdo_k$(18);
                continue $sm;
              }
            } else {
              {
                this._set_state__1256591060_i39zdo_k$(19);
                continue $sm;
              }
            }

            break;
          case 17:
            this._set_state__1256591060_i39zdo_k$(18);
            continue $sm;
          case 18:
            this._set_state__1256591060_i39zdo_k$(19);
            continue $sm;
          case 19:
            this._set_state__1256591060_i39zdo_k$(20);
            continue $sm;
          case 20:
            return Unit_getInstance();
          case 21:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 21) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  windowedIterator$slambda.prototype.create_z48b41_k$ = function ($this$iterator, completion) {
    var i = new windowedIterator$slambda(this.$size_1, this.$step_1, this.$iterator_1, this.$reuseBuffer_1, this.$partialWindows_1, completion);
    i.$this$iterator_1 = $this$iterator;
    return i;
  };
  windowedIterator$slambda.$metadata$ = {
    simpleName: 'windowedIterator$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function windowedIterator$slambda_0($size, $step, $iterator, $reuseBuffer, $partialWindows, resultContinuation) {
    var i = new windowedIterator$slambda($size, $step, $iterator, $reuseBuffer, $partialWindows, resultContinuation);
    var l = function ($this$iterator, $cont) {
      return i.invoke_gclp42_k$($this$iterator, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function CoroutineContext() {
  }
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this.serialVersionUID_1 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_1pi7hg_k$ = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function _get_COROUTINE_SUSPENDED__2870145053() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this__1828080292, element, transform) {
    if (!(transform == null)) {
      _this__1828080292.append_oz4qxs_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__1828080292.append_oz4qxs_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this__1828080292.append_t8oh9e_k$(element.value_1);
          Unit_getInstance();
        } else {
          {
            _this__1828080292.append_oz4qxs_k$(toString_1(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this__1828080292, other, ignoreCase) {
    if (equals_0(new Char(_this__1828080292), new Char(other)))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this__1828080292);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (equals_0(new Char(thisUpper), new Char(otherUpper))) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_asDynamic_0 = toString_0(thisUpper);
              tmp$ret$0 = tmp0_asDynamic_0;
              break $l$block;
            }
            var tmp1_unsafeCast_0 = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast_0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
        break $l$block_2;
      }
      var tmp_0 = new Char(tmp$ret$3);
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_asDynamic_0 = toString_0(otherUpper);
              tmp$ret$4 = tmp2_asDynamic_0;
              break $l$block_3;
            }
            var tmp3_unsafeCast_0 = tmp$ret$4.toLowerCase();
            tmp$ret$5 = tmp3_unsafeCast_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
        break $l$block_6;
      }
      tmp = equals_0(tmp_0, new Char(tmp$ret$7));
    }
    return tmp;
  }
  function trimMargin(_this__1828080292, marginPrefix) {
    return replaceIndentByMargin(_this__1828080292, '', marginPrefix);
  }
  function trimMargin$default(_this__1828080292, marginPrefix, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      marginPrefix = '|';
    return trimMargin(_this__1828080292, marginPrefix);
  }
  function replaceIndentByMargin(_this__1828080292, newIndent, marginPrefix) {
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !isBlank(marginPrefix);
        break $l$block;
      }
      var tmp0_require_0 = tmp$ret$0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'marginPrefix must be non-blank string.';
          break $l$block_0;
        }
        var message_2 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_2(message_2));
      }
    }
    var lines_0 = lines(_this__1828080292);
    var tmp$ret$12;
    $l$block_12: {
      var tmp1_reindent_0 = _this__1828080292.length + imul(newIndent.length, lines_0._get_size__809037418_ddoh9m_k$()) | 0;
      var tmp2_reindent_0 = getIndentFunction(newIndent);
      var lastIndex_1 = _get_lastIndex__339712501(lines_0);
      var tmp$ret$11;
      $l$block_11: {
        var tmp$ret$10;
        $l$block_10: {
          var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
          {
            var index_1_2 = 0;
            var tmp0_iterator_2_3 = lines_0.iterator_jk1svi_k$();
            while (tmp0_iterator_2_3.hasNext_bitz1p_k$()) {
              var item_3_4 = tmp0_iterator_2_3.next_20eer_k$();
              {
                var tmp1_4_6 = index_1_2;
                index_1_2 = tmp1_4_6 + 1 | 0;
                var tmp0__anonymous__1_5_5_1758104773 = checkIndexOverflow(tmp1_4_6);
                var tmp$ret$8;
                $l$block_8: {
                  var tmp;
                  if ((tmp0__anonymous__1_5_5_1758104773 === 0 ? true : tmp0__anonymous__1_5_5_1758104773 === lastIndex_1) ? isBlank(item_3_4) : false) {
                    tmp = null;
                  } else {
                    var tmp$ret$6;
                    $l$block_6: {
                      var tmp$ret$3;
                      $l$block_3: {
                        var inductionVariable = 0;
                        var last = charSequenceLength(item_3_4) - 1 | 0;
                        if (inductionVariable <= last)
                          do {
                            var index_2_8 = inductionVariable;
                            inductionVariable = inductionVariable + 1 | 0;
                            var tmp$ret$2;
                            $l$block_1: {
                              var tmp0__anonymous__3_9_1682276437 = charSequenceGet(item_3_4, index_2_8);
                              tmp$ret$2 = !isWhitespace(tmp0__anonymous__3_9_1682276437);
                              break $l$block_1;
                            }
                            if (tmp$ret$2) {
                              tmp$ret$3 = index_2_8;
                              break $l$block_3;
                            } else {
                            }
                          }
                           while (inductionVariable <= last);
                        tmp$ret$3 = -1;
                        break $l$block_3;
                      }
                      var firstNonWhitespaceIndex_6 = tmp$ret$3;
                      var tmp_0;
                      if (firstNonWhitespaceIndex_6 === -1) {
                        tmp_0 = null;
                      } else {
                        if (startsWith$default_0(item_3_4, marginPrefix, firstNonWhitespaceIndex_6, false, 4, null)) {
                          var tmp$ret$5;
                          $l$block_5: {
                            var tmp1_substring_0_10 = firstNonWhitespaceIndex_6 + marginPrefix.length | 0;
                            var tmp$ret$4;
                            $l$block_4: {
                              tmp$ret$4 = item_3_4;
                              break $l$block_4;
                            }
                            tmp$ret$5 = tmp$ret$4.substring(tmp1_substring_0_10);
                            break $l$block_5;
                          }
                          tmp_0 = tmp$ret$5;
                        } else {
                          {
                            tmp_0 = null;
                          }
                        }
                      }
                      tmp$ret$6 = tmp_0;
                      break $l$block_6;
                    }
                    var tmp0_safe_receiver_4_10 = tmp$ret$6;
                    var tmp_1;
                    if (tmp0_safe_receiver_4_10 == null) {
                      tmp_1 = null;
                    } else {
                      var tmp$ret$7;
                      $l$block_7: {
                        {
                        }
                        tmp$ret$7 = tmp2_reindent_0(tmp0_safe_receiver_4_10);
                        break $l$block_7;
                      }
                      tmp_1 = tmp$ret$7;
                    }
                    var tmp1_elvis_lhs_3_9 = tmp_1;
                    tmp = tmp1_elvis_lhs_3_9 == null ? item_3_4 : tmp1_elvis_lhs_3_9;
                  }
                  tmp$ret$8 = tmp;
                  break $l$block_8;
                }
                var tmp0_safe_receiver_2_6_7 = tmp$ret$8;
                if (tmp0_safe_receiver_2_6_7 == null)
                  null;
                else {
                  var tmp$ret$9;
                  $l$block_9: {
                    {
                    }
                    tmp1_mapIndexedNotNullTo_0_1.add_1j60pz_k$(tmp0_safe_receiver_2_6_7);
                    tmp$ret$9 = Unit_getInstance();
                    break $l$block_9;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
              }
            }
          }
          tmp$ret$10 = tmp1_mapIndexedNotNullTo_0_1;
          break $l$block_10;
        }
        tmp$ret$11 = tmp$ret$10;
        break $l$block_11;
      }
      var tmp_2 = tmp$ret$11;
      var tmp_3 = StringBuilder_init_$Create$(tmp1_reindent_0);
      tmp$ret$12 = joinTo$default(tmp_2, tmp_3, '\n', null, null, 0, null, null, 124, null).toString();
      break $l$block_12;
    }
    return tmp$ret$12;
  }
  function getIndentFunction(indent) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(indent) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = getIndentFunction$lambda();
    } else {
      {
        tmp = getIndentFunction$lambda_0(indent);
      }
    }
    return tmp;
  }
  function getIndentFunction$lambda() {
    return function (line) {
      return line;
    };
  }
  function getIndentFunction$lambda_0($indent) {
    return function (line) {
      return $indent + line;
    };
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$("Invalid number format: '" + input + "'");
  }
  function lines(_this__1828080292) {
    return toList_0(lineSequence(_this__1828080292));
  }
  function _get_indices__2241594442_0(_this__1828080292) {
    return numberRangeToNumber(0, charSequenceLength(_this__1828080292) - 1 | 0);
  }
  function regionMatchesImpl(_this__1828080292, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this__1828080292) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this__1828080292, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function requireNonNegativeLimit(limit) {
    var tmp0_require_0 = limit >= 0;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 'Limit must be non-negative, but was ' + limit;
        break $l$block;
      }
      var message_2 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message_2));
    }
    return tmp;
  }
  function _get_lastIndex__339712501_0(_this__1828080292) {
    return charSequenceLength(_this__1828080292) - 1 | 0;
  }
  function lineSequence(_this__1828080292) {
    return splitToSequence$default(_this__1828080292, ['\r\n', '\n', '\r'], false, 0, 6, null);
  }
  function splitToSequence(_this__1828080292, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this__1828080292, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, splitToSequence$lambda(_this__1828080292));
  }
  function splitToSequence$default(_this__1828080292, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this__1828080292, delimiters, ignoreCase, limit);
  }
  function substring(_this__1828080292, range) {
    return toString_2(charSequenceSubSequence(_this__1828080292, range._get_start__3614751663_b8zdqp_k$(), range._get_endInclusive__731268122_c3dm3e_k$() + 1 | 0));
  }
  function rangesDelimitedBy(_this__1828080292, delimiters, startIndex, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this__1828080292, startIndex, limit, rangesDelimitedBy$lambda(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this__1828080292, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this__1828080292, delimiters, startIndex, ignoreCase, limit);
  }
  function calcNext_0($this) {
    if ($this.nextSearchIndex_1 < 0) {
      $this.nextState_1 = 0;
      $this.nextItem_1 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this.this$0__1.limit_1 > 0) {
        var tmp0_this = $this;
        tmp0_this.counter_1 = tmp0_this.counter_1 + 1 | 0;
        tmp_0 = tmp0_this.counter_1 >= $this.this$0__1.limit_1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this.nextSearchIndex_1 > charSequenceLength($this.this$0__1.input_1);
        }
      }
      if (tmp) {
        $this.nextItem_1 = numberRangeToNumber($this.currentStartIndex_1, _get_lastIndex__339712501_0($this.this$0__1.input_1));
        $this.nextSearchIndex_1 = -1;
      } else {
        {
          var match = $this.this$0__1.getNextMatch_1($this.this$0__1.input_1, $this.nextSearchIndex_1);
          if (match == null) {
            $this.nextItem_1 = numberRangeToNumber($this.currentStartIndex_1, _get_lastIndex__339712501_0($this.this$0__1.input_1));
            $this.nextSearchIndex_1 = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1_7eebsc_k$();
            var length = tmp1_container.component2_7eebsb_k$();
            $this.nextItem_1 = until($this.currentStartIndex_1, index);
            $this.currentStartIndex_1 = index + length | 0;
            $this.nextSearchIndex_1 = $this.currentStartIndex_1 + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this.nextState_1 = 1;
    }
  }
  function DelimitedRangesSequence$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.nextState_1 = -1;
    this.currentStartIndex_1 = coerceIn(this$0.startIndex_1, 0, charSequenceLength(this$0.input_1));
    this.nextSearchIndex_1 = this.currentStartIndex_1;
    this.nextItem_1 = null;
    this.counter_1 = 0;
  }
  DelimitedRangesSequence$iterator$1.prototype.next_20eer_k$ = function () {
    if (this.nextState_1 === -1)
      calcNext_0(this);
    if (this.nextState_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.nextItem_1;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this.nextItem_1 = null;
    this.nextState_1 = -1;
    return result;
  };
  DelimitedRangesSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    if (this.nextState_1 === -1)
      calcNext_0(this);
    return this.nextState_1 === 1;
  };
  DelimitedRangesSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this.input_1 = input;
    this.startIndex_1 = startIndex;
    this.limit_1 = limit;
    this.getNextMatch_1 = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_jk1svi_k$ = function () {
    return new DelimitedRangesSequence$iterator$1(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this__1828080292, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings._get_size__809037418_ddoh9m_k$() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last) {
        tmp = indexOf$default(_this__1828080292, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this__1828080292, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this__1828080292)) : downTo(coerceAtMost(startIndex, _get_lastIndex__339712501_0(_this__1828080292)), 0);
    if (typeof _this__1828080292 === 'string') {
      var inductionVariable = indices._get_first__3232921377_hkbbvj_k$();
      var last_0 = indices._get_last__802328181_d9oodx_k$();
      var step = indices._get_step__809345279_ddv2tb_k$();
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_iterator_1 = strings.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_2 = tmp0_iterator_1.next_20eer_k$();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = regionMatches(element_2, 0, _this__1828080292, index_0, element_2.length, ignoreCase);
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = element_2;
                break $l$block_1;
              } else {
              }
            }
            tmp$ret$1 = null;
            break $l$block_1;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      {
        var inductionVariable_0 = indices._get_first__3232921377_hkbbvj_k$();
        var last_1 = indices._get_last__802328181_d9oodx_k$();
        var step_0 = indices._get_step__809345279_ddv2tb_k$();
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$3;
            $l$block_4: {
              var tmp0_iterator_1_0 = strings.iterator_jk1svi_k$();
              while (tmp0_iterator_1_0.hasNext_bitz1p_k$()) {
                var element_2_0 = tmp0_iterator_1_0.next_20eer_k$();
                var tmp$ret$2;
                $l$block_2: {
                  tmp$ret$2 = regionMatchesImpl(element_2_0, 0, _this__1828080292, index_1, element_2_0.length, ignoreCase);
                  break $l$block_2;
                }
                if (tmp$ret$2) {
                  tmp$ret$3 = element_2_0;
                  break $l$block_4;
                } else {
                }
              }
              tmp$ret$3 = null;
              break $l$block_4;
            }
            var matchingString_0 = tmp$ret$3;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_1));
      }
    }
    return null;
  }
  function indexOf_0(_this__1828080292, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__1828080292 === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this__1828080292);
      tmp = indexOf$default_0(_this__1828080292, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = _this__1828080292;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function indexOf$default(_this__1828080292, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_0(_this__1828080292, string, startIndex, ignoreCase);
  }
  function lastIndexOf(_this__1828080292, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__1828080292 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this__1828080292, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeLastIndexOf_0 = _this__1828080292;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeLastIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.lastIndexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this__1828080292, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__339712501_0(_this__1828080292);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this__1828080292, string, startIndex, ignoreCase);
  }
  function indexOf_1(_this__1828080292, other, startIndex, endIndex, ignoreCase, last) {
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__1828080292))) : downTo(coerceAtMost(startIndex, _get_lastIndex__339712501_0(_this__1828080292)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this__1828080292 === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._get_first__3232921377_hkbbvj_k$();
      var last_0 = indices._get_last__802328181_d9oodx_k$();
      var step = indices._get_step__809345279_ddv2tb_k$();
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this__1828080292, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      {
        var inductionVariable_0 = indices._get_first__3232921377_hkbbvj_k$();
        var last_1 = indices._get_last__802328181_d9oodx_k$();
        var step_0 = indices._get_step__809345279_ddv2tb_k$();
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this__1828080292, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_1));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this__1828080292, other, startIndex, endIndex, ignoreCase, last, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last = false;
    return indexOf_1(_this__1828080292, other, startIndex, endIndex, ignoreCase, last);
  }
  function splitToSequence$lambda($this_splitToSequence) {
    return function (it) {
      return substring($this_splitToSequence, it);
    };
  }
  function rangesDelimitedBy$lambda($delimitersList, $ignoreCase) {
    return function ($this$$receiver, currentIndex) {
      var tmp0_safe_receiver = findAnyOf($this$$receiver, $delimitersList, currentIndex, $ignoreCase, false);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          {
          }
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = to(tmp0_safe_receiver._get_first__3232921377_hkbbvj_k$(), tmp0_safe_receiver._get_second__4255435031_njbah_k$().length);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      return tmp;
    };
  }
  function MatchGroupCollection() {
  }
  MatchGroupCollection.$metadata$ = {
    simpleName: 'MatchGroupCollection',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MatchResult() {
  }
  MatchResult.$metadata$ = {
    simpleName: 'MatchResult',
    kind: 'interface',
    interfaces: []
  };
  function _Result___init__impl__2241242780(value) {
    return value;
  }
  function _Result___get_value__impl__3597185688(this_0) {
    return this_0;
  }
  function _Result___get_isFailure__impl__3103244073(this_0) {
    var tmp = _Result___get_value__impl__3597185688(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl_1523290257(this_0) {
    var tmp0_subject = _Result___get_value__impl__3597185688(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl__3597185688(this_0).exception_1;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Failure(exception) {
    this.exception_1 = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_0(this.exception_1, other.exception_1);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this.exception_1);
  };
  Failure.prototype.toString = function () {
    return 'Failure(' + this.exception_1 + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function throwOnFailure(_this__1828080292) {
    var tmp = _Result___get_value__impl__3597185688(_this__1828080292);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl__3597185688(_this__1828080292).exception_1;
    else {
    }
  }
  function NotImplementedError(message) {
    Error_init_$Init$(message, this);
    captureStack(this, NotImplementedError);
  }
  NotImplementedError.$metadata$ = {
    simpleName: 'NotImplementedError',
    kind: 'class',
    interfaces: []
  };
  function Triple(first, second, third) {
    this.first_1 = first;
    this.second_1 = second;
    this.third_1 = third;
  }
  Triple.prototype.toString = function () {
    return '(' + this.first_1 + ', ' + this.second_1 + ', ' + this.third_1 + ')';
  };
  Triple.prototype.hashCode = function () {
    var result = this.first_1 == null ? 0 : hashCode(this.first_1);
    result = imul(result, 31) + (this.second_1 == null ? 0 : hashCode(this.second_1)) | 0;
    result = imul(result, 31) + (this.third_1 == null ? 0 : hashCode(this.third_1)) | 0;
    return result;
  };
  Triple.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Triple))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Triple ? other : THROW_CCE();
    if (!equals_0(this.first_1, tmp0_other_with_cast.first_1))
      return false;
    if (!equals_0(this.second_1, tmp0_other_with_cast.second_1))
      return false;
    if (!equals_0(this.third_1, tmp0_other_with_cast.third_1))
      return false;
    return true;
  };
  Triple.$metadata$ = {
    simpleName: 'Triple',
    kind: 'class',
    interfaces: [Serializable]
  };
  function Pair(first, second) {
    this.first_1 = first;
    this.second_1 = second;
  }
  Pair.prototype._get_first__3232921377_hkbbvj_k$ = function () {
    return this.first_1;
  };
  Pair.prototype._get_second__4255435031_njbah_k$ = function () {
    return this.second_1;
  };
  Pair.prototype.toString = function () {
    return '(' + this.first_1 + ', ' + this.second_1 + ')';
  };
  Pair.prototype.component1_7eebsc_k$ = function () {
    return this.first_1;
  };
  Pair.prototype.component2_7eebsb_k$ = function () {
    return this.second_1;
  };
  Pair.prototype.hashCode = function () {
    var result = this.first_1 == null ? 0 : hashCode(this.first_1);
    result = imul(result, 31) + (this.second_1 == null ? 0 : hashCode(this.second_1)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this.first_1, tmp0_other_with_cast.first_1))
      return false;
    if (!equals_0(this.second_1, tmp0_other_with_cast.second_1))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this__1828080292, that) {
    return new Pair(_this__1828080292, that);
  }
  function _UShort___init__impl__3115094534(data) {
    return data;
  }
  function _UShort___get_data__impl__26876597(this_0) {
    return this_0;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function MutableListIterator() {
  }
  MutableListIterator.$metadata$ = {
    simpleName: 'MutableListIterator',
    kind: 'interface',
    interfaces: [ListIterator, MutableIterator]
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_20eer_k$ = function () {
    return this.nextInt_ujorgc_k$();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.step_1 = step;
    this.finalElement_1 = last;
    this.hasNext_1 = this.step_1 > 0 ? first <= last : first >= last;
    this.next_1 = this.hasNext_1 ? first : this.finalElement_1;
  }
  IntProgressionIterator.prototype.hasNext_bitz1p_k$ = function () {
    return this.hasNext_1;
  };
  IntProgressionIterator.prototype.nextInt_ujorgc_k$ = function () {
    var value = this.next_1;
    if (value === this.finalElement_1) {
      if (!this.hasNext_1)
        throw NoSuchElementException_init_$Create$();
      this.hasNext_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this.next_1 = tmp0_this.next_1 + this.step_1 | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.fromClosedRange_vhxzyy_k$ = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_3();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$())
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.first_1 = start;
    this.last_1 = getProgressionLastElement(start, endInclusive, step);
    this.step_1 = step;
  }
  IntProgression.prototype._get_first__3232921377_hkbbvj_k$ = function () {
    return this.first_1;
  };
  IntProgression.prototype._get_last__802328181_d9oodx_k$ = function () {
    return this.last_1;
  };
  IntProgression.prototype._get_step__809345279_ddv2tb_k$ = function () {
    return this.step_1;
  };
  IntProgression.prototype.iterator_jk1svi_k$ = function () {
    return new IntProgressionIterator(this.first_1, this.last_1, this.step_1);
  };
  IntProgression.prototype.isEmpty_y1axqb_k$ = function () {
    return this.step_1 > 0 ? this.first_1 > this.last_1 : this.first_1 < this.last_1;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_y1axqb_k$() ? other.isEmpty_y1axqb_k$() : false) ? true : (this.first_1 === other.first_1 ? this.last_1 === other.last_1 : false) ? this.step_1 === other.step_1 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_y1axqb_k$() ? -1 : imul(31, imul(31, this.first_1) + this.last_1 | 0) + this.step_1 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this.step_1 > 0 ? '' + this.first_1 + '..' + this.last_1 + ' step ' + this.step_1 : '' + this.first_1 + ' downTo ' + this.last_1 + ' step ' + (-this.step_1 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.EMPTY_1 = new IntRange(1, 0);
  }
  Companion_4.prototype._get_EMPTY__2261257284_xmtgos_k$ = function () {
    return this.EMPTY_1;
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_4();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    return this._get_first__3232921377_hkbbvj_k$();
  };
  IntRange.prototype._get_endInclusive__731268122_c3dm3e_k$ = function () {
    return this._get_last__802328181_d9oodx_k$();
  };
  IntRange.prototype.isEmpty_y1axqb_k$ = function () {
    return this._get_first__3232921377_hkbbvj_k$() > this._get_last__802328181_d9oodx_k$();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_y1axqb_k$() ? other.isEmpty_y1axqb_k$() : false) ? true : this._get_first__3232921377_hkbbvj_k$() === other._get_first__3232921377_hkbbvj_k$() ? this._get_last__802328181_d9oodx_k$() === other._get_last__802328181_d9oodx_k$() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_y1axqb_k$() ? -1 : imul(31, this._get_first__3232921377_hkbbvj_k$()) + this._get_last__802328181_d9oodx_k$() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__3232921377_hkbbvj_k$() + '..' + this._get_last__802328181_d9oodx_k$();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b;
    return mod >= 0 ? mod : mod + b | 0;
  }
  function IntCompanionObject() {
    IntCompanionObject_instance = this;
    this.MIN_VALUE_1 = -2147483648;
    this.MAX_VALUE_1 = 2147483647;
    this.SIZE_BYTES_1 = 4;
    this.SIZE_BITS_1 = 32;
  }
  IntCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$ = function () {
    return this.MIN_VALUE_1;
  };
  IntCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$ = function () {
    return this.MAX_VALUE_1;
  };
  IntCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$ = function () {
    return this.SIZE_BYTES_1;
  };
  IntCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$ = function () {
    return this.SIZE_BITS_1;
  };
  IntCompanionObject.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$
  });
  Object.defineProperty(IntCompanionObject.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$
  });
  Object.defineProperty(IntCompanionObject.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$
  });
  Object.defineProperty(IntCompanionObject.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject();
    return IntCompanionObject_instance;
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function setOf(element) {
    return hashSetOf([element]);
  }
  function copyToArrayImpl(collection) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_20eer_k$());
    }
    return array;
  }
  function copyToArray(collection) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = collection;
      break $l$block;
    }
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = collection;
          break $l$block_0;
        }
        var tmp0_unsafeCast_0 = tmp$ret$1.toArray();
        tmp$ret$2 = tmp0_unsafeCast_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      {
        var tmp$ret$4;
        $l$block_3: {
          var tmp1_unsafeCast_0 = copyToArrayImpl(collection);
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = tmp1_unsafeCast_0;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp = tmp$ret$4;
      }
    }
    return tmp;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_oxxjjk_k$ = function (elements) {
    this.checkIsMutable_h4zzmr_k$();
    var modified = false;
    var tmp0_iterator = elements.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (this.add_1j60pz_k$(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_h4zzmr_k$ = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl_0($outer) {
    this.$this_1 = $outer;
    this.index_1 = 0;
    this.last_1 = -1;
  }
  IteratorImpl_0.prototype._set_index__964833971_tqmhb1_k$ = function (_set____804775014) {
    this.index_1 = _set____804775014;
  };
  IteratorImpl_0.prototype.hasNext_bitz1p_k$ = function () {
    return this.index_1 < this.$this_1._get_size__809037418_ddoh9m_k$();
  };
  IteratorImpl_0.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this.index_1;
    tmp0_this.index_1 = tmp1 + 1 | 0;
    tmp.last_1 = tmp1;
    return this.$this_1.get_fkrdnv_k$(this.last_1);
  };
  IteratorImpl_0.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ListIteratorImpl_0($outer, index) {
    this.$this_2 = $outer;
    IteratorImpl_0.call(this, $outer);
    Companion_getInstance().checkPositionIndex_kxpgsw_k$(index, this.$this_2._get_size__809037418_ddoh9m_k$());
    this._set_index__964833971_tqmhb1_k$(index);
  }
  ListIteratorImpl_0.$metadata$ = {
    simpleName: 'ListIteratorImpl',
    kind: 'class',
    interfaces: [MutableListIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.modCount_1 = 0;
  }
  AbstractMutableList.prototype._set_modCount__3570657354_7f6d5y_k$ = function (_set____804775014) {
    this.modCount_1 = _set____804775014;
  };
  AbstractMutableList.prototype._get_modCount__2796526142_os4sle_k$ = function () {
    return this.modCount_1;
  };
  AbstractMutableList.prototype.add_1j60pz_k$ = function (element) {
    this.checkIsMutable_h4zzmr_k$();
    this.add_ydlf05_k$(this._get_size__809037418_ddoh9m_k$(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_jk1svi_k$ = function () {
    return new IteratorImpl_0(this);
  };
  AbstractMutableList.prototype.contains_2ehdt1_k$ = function (element) {
    return this.indexOf_dcv8dt_k$(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_dcv8dt_k$ = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex__339712501(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.get_fkrdnv_k$(index), element)) {
          return index;
        }
      }
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.listIterator_5hanv9_k$ = function (index) {
    return new ListIteratorImpl_0(this, index);
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals_40uhas_k$(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_2n0xp_k$(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function AbstractMutableMap$keys$1$iterator$1($entryIterator) {
    this.$entryIterator_1 = $entryIterator;
  }
  AbstractMutableMap$keys$1$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.$entryIterator_1.hasNext_bitz1p_k$();
  };
  AbstractMutableMap$keys$1$iterator$1.prototype.next_20eer_k$ = function () {
    return this.$entryIterator_1.next_20eer_k$()._get_key__857139730_e6bh8y_k$();
  };
  AbstractMutableMap$keys$1$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this.key_1 = key;
    this._value_1 = value;
  }
  SimpleEntry.prototype._get_key__857139730_e6bh8y_k$ = function () {
    return this.key_1;
  };
  SimpleEntry.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this._value_1;
  };
  SimpleEntry.prototype.setValue_i0ryyi_k$ = function (newValue) {
    var oldValue = this._value_1;
    this._value_1 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode_6enkgc_k$(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString_sxv7wb_k$(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals_sgqdyf_k$(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_2ehdt1_k$ = function (element) {
    return this.containsEntry_1men9v_k$(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap$keys$1(this$0) {
    this.this$0__1 = this$0;
    AbstractMutableSet.call(this);
  }
  AbstractMutableMap$keys$1.prototype.add_1j60q5_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  AbstractMutableMap$keys$1.prototype.add_1j60pz_k$ = function (element) {
    return this.add_1j60q5_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.contains_2ehdt7_k$ = function (element) {
    return this.this$0__1.containsKey_wgk31w_k$(element);
  };
  AbstractMutableMap$keys$1.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_2ehdt7_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.iterator_jk1svi_k$ = function () {
    var entryIterator = this.this$0__1._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
    return new AbstractMutableMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMutableMap$keys$1.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.this$0__1._get_size__809037418_ddoh9m_k$();
  };
  AbstractMutableMap$keys$1.prototype.checkIsMutable_h4zzmr_k$ = function () {
    return this.this$0__1.checkIsMutable_h4zzmr_k$();
  };
  AbstractMutableMap$keys$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this._keys_2 = null;
    this._values_2 = null;
  }
  AbstractMutableMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    if (this._keys_2 == null) {
      var tmp = this;
      tmp._keys_2 = new AbstractMutableMap$keys$1(this);
    }
    return ensureNotNull(this._keys_2);
  };
  AbstractMutableMap.prototype.checkIsMutable_h4zzmr_k$ = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals_mwtoa3_k$(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_hl8x0c_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray(elements);
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_ux0wz1_k$(index, $this._get_size__809037418_ddoh9m_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_kxpgsw_k$(index, $this._get_size__809037418_ddoh9m_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this.array_1 = array;
    this.isReadOnly_1 = false;
  }
  ArrayList.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.array_1.length;
  };
  ArrayList.prototype.get_fkrdnv_k$ = function (index) {
    var tmp = this.array_1[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_1j60pz_k$ = function (element) {
    this.checkIsMutable_h4zzmr_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this.array_1;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__2796526142_os4sle_k$();
    tmp0_this._set_modCount__3570657354_7f6d5y_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_ydlf05_k$ = function (index, element) {
    this.checkIsMutable_h4zzmr_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this.array_1;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__2796526142_os4sle_k$();
    tmp0_this._set_modCount__3570657354_7f6d5y_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_oxxjjk_k$ = function (elements) {
    this.checkIsMutable_h4zzmr_k$();
    if (elements.isEmpty_y1axqb_k$())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_plus_0 = tmp0_this.array_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = copyToArray(elements);
        break $l$block;
      }
      var tmp1_plus_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_plus_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.concat(tmp1_plus_0);
      break $l$block_1;
    }
    tmp.array_1 = tmp$ret$2;
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__2796526142_os4sle_k$();
    tmp1_this._set_modCount__3570657354_7f6d5y_k$(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.clear_j9y8zo_k$ = function () {
    this.checkIsMutable_h4zzmr_k$();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    tmp.array_1 = tmp$ret$0;
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__2796526142_os4sle_k$();
    tmp0_this._set_modCount__3570657354_7f6d5y_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_dcv8dt_k$ = function (element) {
    return indexOf(this.array_1, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this.array_1);
  };
  ArrayList.prototype.toArray_jjyjqa_k$ = function () {
    return [].slice.call(this.array_1);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_jjyjqa_k$();
  };
  ArrayList.prototype.checkIsMutable_h4zzmr_k$ = function () {
    if (this.isReadOnly_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_bs7q9r_k$ = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.getHashCode_uyct7y_k$ = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this.$this_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_c92ay9_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_1j60pz_k$ = function (element) {
    return this.add_c92ay9_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_1men9v_k$ = function (element) {
    return this.$this_1.containsEntry_lxbt7v_k$(element);
  };
  EntrySet.prototype.iterator_jk1svi_k$ = function () {
    return this.$this_1.internalMap_1.iterator_jk1svi_k$();
  };
  EntrySet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.$this_1._get_size__809037418_ddoh9m_k$();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.internalMap_1 = internalMap;
    $this.equality_1 = internalMap._get_equality__2325359121_wknje7_k$();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    {
      var tmp0_require_0 = initialCapacity >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Negative initial capacity: ' + initialCapacity;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_1));
      }
    }
    {
      var tmp1_require_0 = loadFactor >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Non-positive load factor: ' + loadFactor;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_2(message_1_0));
      }
    }
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this.internalMap_1.contains_2ehdt7_k$(key);
  };
  HashMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    if (this._entries_1 == null) {
      this._entries_1 = this.createEntrySet_jd8v2s_k$();
    }
    return ensureNotNull(this._entries_1);
  };
  HashMap.prototype.createEntrySet_jd8v2s_k$ = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_1mhr4y_k$ = function (key) {
    return this.internalMap_1.get_1mhr4y_k$(key);
  };
  HashMap.prototype.put_3mhbri_k$ = function (key, value) {
    return this.internalMap_1.put_3mhbri_k$(key, value);
  };
  HashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.internalMap_1._get_size__809037418_ddoh9m_k$();
  };
  function HashMap() {
    this._entries_1 = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.map_1 = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_1(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.map_1 = map;
    return $this;
  }
  HashSet.prototype._get_map__857195189_e6co1h_k$ = function () {
    return this.map_1;
  };
  HashSet.prototype.add_1j60pz_k$ = function (element) {
    var old = this.map_1.put_3mhbri_k$(element, this);
    return old == null;
  };
  HashSet.prototype.contains_2ehdt1_k$ = function (element) {
    return this.map_1.containsKey_wgk31w_k$(element);
  };
  HashSet.prototype.isEmpty_y1axqb_k$ = function () {
    return this.map_1.isEmpty_y1axqb_k$();
  };
  HashSet.prototype.iterator_jk1svi_k$ = function () {
    return this.map_1._get_keys__801529559_d97k5z_k$().iterator_jk1svi_k$();
  };
  HashSet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.map_1._get_size__809037418_ddoh9m_k$();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this.chainOrEntry_1 != null ? $this.isChain_1 : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = $this.chainOrEntry_1;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this.itemIndex_1 = tmp0_this.itemIndex_1 + 1 | 0;
      if (tmp0_this.itemIndex_1 < chainSize)
        return 0;
      else {
      }
    }
    var tmp1_this = $this;
    tmp1_this.keyIndex_1 = tmp1_this.keyIndex_1 + 1 | 0;
    if (tmp1_this.keyIndex_1 < $this.keys_1.length) {
      $this.chainOrEntry_1 = $this.this$0__1.backingMap_1[$this.keys_1[$this.keyIndex_1]];
      var tmp = $this;
      var tmp_0 = $this.chainOrEntry_1;
      tmp.isChain_1 = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this.itemIndex_1 = 0;
      return 0;
    } else {
      {
        $this.chainOrEntry_1 = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this.equality_1.getHashCode_uyct7y_k$(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this.equality_1.equals_bs7q9r_k$(entry._get_key__857139730_e6bh8y_k$(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this__1828080292, $this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var indexedObject = _this__1828080292;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this.equality_1.equals_bs7q9r_k$(element_2._get_key__857139730_e6bh8y_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode) {
    var chainOrEntry = $this.backingMap_1[hashCode];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function InternalHashCodeMap$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.state_1 = -1;
    this.keys_1 = Object.keys(this$0.backingMap_1);
    this.keyIndex_1 = -1;
    this.chainOrEntry_1 = null;
    this.isChain_1 = false;
    this.itemIndex_1 = -1;
    this.lastEntry_1 = null;
  }
  InternalHashCodeMap$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    if (this.state_1 === -1)
      this.state_1 = computeNext(this);
    return this.state_1 === 0;
  };
  InternalHashCodeMap$iterator$1.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this.isChain_1) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = this.chainOrEntry_1;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0[this.itemIndex_1];
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = this.chainOrEntry_1;
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this.lastEntry_1 = lastEntry;
    this.state_1 = -1;
    return lastEntry;
  };
  InternalHashCodeMap$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this.equality_1 = equality;
    this.backingMap_1 = this.createJsMap_8hfwp5_k$();
    this.size_1 = 0;
  }
  InternalHashCodeMap.prototype._get_equality__2325359121_wknje7_k$ = function () {
    return this.equality_1;
  };
  InternalHashCodeMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  InternalHashCodeMap.prototype.put_3mhbri_k$ = function (key, value) {
    var hashCode = this.equality_1.getHashCode_uyct7y_k$(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode);
    if (chainOrEntry == null) {
      this.backingMap_1[hashCode] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this.equality_1.equals_bs7q9r_k$(entry._get_key__857139730_e6bh8y_k$(), key)) {
          return entry.setValue_i0ryyi_k$(value);
        } else {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_arrayOf_0;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          this.backingMap_1[hashCode] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this.size_1;
          tmp0_this.size_1 = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_i0ryyi_k$(value);
          }
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = chain;
            break $l$block_2;
          }
          tmp$ret$3.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.size_1;
    tmp2_this.size_1 = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_2ehdt7_k$ = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_1mhr4y_k$ = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3683422336_a43j40_k$();
  };
  InternalHashCodeMap.prototype.iterator_jk1svi_k$ = function () {
    return new InternalHashCodeMap$iterator$1(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this.$this_1 = $outer;
    this.last_1 = null;
    this.next_1 = null;
    this.next_1 = this.$this_1.$this_1.head_1;
  }
  EntryIterator.prototype.hasNext_bitz1p_k$ = function () {
    return !(this.next_1 === null);
  };
  EntryIterator.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this.next_1);
    this.last_1 = current;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_takeIf_0 = current.next_1;
      {
      }
      var tmp_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !(tmp0_takeIf_0 === this.$this_1.$this_1.head_1);
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp_0 = tmp0_takeIf_0;
      } else {
        {
          tmp_0 = null;
        }
      }
      tmp$ret$1 = tmp_0;
      break $l$block_0;
    }
    tmp.next_1 = tmp$ret$1;
    return current;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this.$this_1 = $outer;
    SimpleEntry.call(this, key, value);
    this.next_1 = null;
    this.prev_1 = null;
  }
  ChainEntry.prototype.setValue_i0ryyi_k$ = function (newValue) {
    this.$this_1.checkIsMutable_h4zzmr_k$();
    return SimpleEntry.prototype.setValue_i0ryyi_k$.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this.$this_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_c92ay9_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_1j60pz_k$ = function (element) {
    return this.add_c92ay9_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_1men9v_k$ = function (element) {
    return this.$this_1.containsEntry_lxbt7v_k$(element);
  };
  EntrySet_0.prototype.iterator_jk1svi_k$ = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.$this_1._get_size__809037418_ddoh9m_k$();
  };
  EntrySet_0.prototype.checkIsMutable_h4zzmr_k$ = function () {
    return this.$this_1.checkIsMutable_h4zzmr_k$();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this__1828080292, $this) {
    {
      var tmp0_check_0 = _this__1828080292.next_1 == null ? _this__1828080292.prev_1 == null : false;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_2(message_2_1));
        }
      }
    }
    var _head = $this.head_1;
    if (_head == null) {
      $this.head_1 = _this__1828080292;
      _this__1828080292.next_1 = _this__1828080292;
      _this__1828080292.prev_1 = _this__1828080292;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_checkNotNull_0 = _head.prev_1;
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          if (tmp1_checkNotNull_0 == null) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Required value was null.';
              break $l$block_0;
            }
            var message_2_1_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_2(message_2_1_0));
          } else {
            tmp$ret$2 = tmp1_checkNotNull_0;
            break $l$block_1;
          }
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var _tail = tmp$ret$3;
      _this__1828080292.prev_1 = _tail;
      _this__1828080292.next_1 = _head;
      _head.prev_1 = _this__1828080292;
      _tail.next_1 = _this__1828080292;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this.map_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this.map_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this.map_1.containsKey_wgk31w_k$(key);
  };
  LinkedHashMap.prototype.createEntrySet_jd8v2s_k$ = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_1mhr4y_k$ = function (key) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3683422336_a43j40_k$();
  };
  LinkedHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    this.checkIsMutable_h4zzmr_k$();
    var old = this.map_1.get_1mhr4y_k$(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this.map_1.put_3mhbri_k$(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_i0ryyi_k$(value);
    }
  };
  LinkedHashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.map_1._get_size__809037418_ddoh9m_k$();
  };
  LinkedHashMap.prototype.checkIsMutable_h4zzmr_k$ = function () {
    if (this.isReadOnly_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this.head_1 = null;
    this.isReadOnly_1 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_1(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_1(LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_1(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_0(initialCapacity) {
    return LinkedHashSet_init_$Init$_1(initialCapacity, Object.create(LinkedHashSet.prototype));
  }
  LinkedHashSet.prototype.checkIsMutable_h4zzmr_k$ = function () {
    return this._get_map__857195189_e6co1h_k$().checkIsMutable_h4zzmr_k$();
  };
  function LinkedHashSet() {
  }
  LinkedHashSet.$metadata$ = {
    simpleName: 'LinkedHashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this__1828080292) {
    return !(_this__1828080292 === _this__1828080292);
  }
  function _get_js__1413122402(_this__1828080292) {
    return (_this__1828080292 instanceof KClassImpl ? _this__1828080292 : THROW_CCE())._get_jClass__3892345245_6npl5v_k$();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this.jClass_1 = jClass;
  }
  KClassImpl.prototype._get_jClass__3892345245_6npl5v_k$ = function () {
    return this.jClass_1;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__3892345245_6npl5v_k$(), other._get_jClass__3892345245_6npl5v_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__973554894_g3mnri_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return 'class ' + this._get_simpleName__973554894_g3mnri_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.givenSimpleName_1 = givenSimpleName;
    this.isInstanceFunction_1 = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this.givenSimpleName_1 === other.givenSimpleName_1 : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__973554894_g3mnri_k$ = function () {
    return this.givenSimpleName_1;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.simpleName_1 = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__973554894_g3mnri_k$ = function () {
    return this.simpleName_1;
  };
  NothingKClassImpl.prototype._get_jClass__3892345245_6npl5v_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    tmp.simpleName_1 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__973554894_g3mnri_k$ = function () {
    return this.simpleName_1;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function _get_functionClasses__573580451() {
    init_properties_primitives_kt_1669626638();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda() {
    return function (it) {
      return isObject(it);
    };
  }
  function PrimitiveClasses$numberClass$lambda() {
    return function (it) {
      return isNumber(it);
    };
  }
  function PrimitiveClasses$booleanClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'boolean' : false;
    };
  }
  function PrimitiveClasses$byteClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$shortClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$intClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$floatClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$doubleClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$arrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isArray(it) : false;
    };
  }
  function PrimitiveClasses$stringClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'string' : false;
    };
  }
  function PrimitiveClasses$throwableClass$lambda() {
    return function (it) {
      return it instanceof Error;
    };
  }
  function PrimitiveClasses$booleanArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isBooleanArray(it) : false;
    };
  }
  function PrimitiveClasses$charArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isCharArray(it) : false;
    };
  }
  function PrimitiveClasses$byteArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isByteArray(it) : false;
    };
  }
  function PrimitiveClasses$shortArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isShortArray(it) : false;
    };
  }
  function PrimitiveClasses$intArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isIntArray(it) : false;
    };
  }
  function PrimitiveClasses$longArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isLongArray(it) : false;
    };
  }
  function PrimitiveClasses$floatArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isFloatArray(it) : false;
    };
  }
  function PrimitiveClasses$doubleArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isDoubleArray(it) : false;
    };
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = it;
          break $l$block;
        }
        tmp = tmp$ret$0.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp.anyClass_1 = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1.numberClass_1 = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda());
    this.nothingClass_1 = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3.booleanClass_1 = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5.byteClass_1 = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7.shortClass_1 = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9.intClass_1 = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11.floatClass_1 = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13.doubleClass_1 = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15.arrayClass_1 = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17.stringClass_1 = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19.throwableClass_1 = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21.booleanArrayClass_1 = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23.charArrayClass_1 = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25.byteArrayClass_1 = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27.shortArrayClass_1 = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29.intArrayClass_1 = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31.longArrayClass_1 = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33.floatArrayClass_1 = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35.doubleArrayClass_1 = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda());
  }
  PrimitiveClasses.prototype._get_anyClass__2722679391_q03l41_k$ = function () {
    return this.anyClass_1;
  };
  PrimitiveClasses.prototype._get_numberClass__2243734466_xx91dq_k$ = function () {
    return this.numberClass_1;
  };
  PrimitiveClasses.prototype._get_nothingClass__2888957184_n93ocg_k$ = function () {
    return this.nothingClass_1;
  };
  PrimitiveClasses.prototype._get_booleanClass__1099338011_i6immz_k$ = function () {
    return this.booleanClass_1;
  };
  PrimitiveClasses.prototype._get_byteClass__3017072385_l4tq0v_k$ = function () {
    return this.byteClass_1;
  };
  PrimitiveClasses.prototype._get_shortClass__2900162991_n2fhw1_k$ = function () {
    return this.shortClass_1;
  };
  PrimitiveClasses.prototype._get_intClass__1005394466_gml3c2_k$ = function () {
    return this.intClass_1;
  };
  PrimitiveClasses.prototype._get_floatClass__141668239_2ccfwv_k$ = function () {
    return this.floatClass_1;
  };
  PrimitiveClasses.prototype._get_doubleClass__2234697290_y2mqie_k$ = function () {
    return this.doubleClass_1;
  };
  PrimitiveClasses.prototype._get_arrayClass__2667531724_qwxlbo_k$ = function () {
    return this.arrayClass_1;
  };
  PrimitiveClasses.prototype._get_stringClass__1269070474_kzkl1m_k$ = function () {
    return this.stringClass_1;
  };
  PrimitiveClasses.prototype._get_throwableClass__2200583411_ymxwy5_k$ = function () {
    return this.throwableClass_1;
  };
  PrimitiveClasses.prototype._get_booleanArrayClass__3316760394_g6ed9y_k$ = function () {
    return this.booleanArrayClass_1;
  };
  PrimitiveClasses.prototype._get_charArrayClass__2352161302_w4p2p6_k$ = function () {
    return this.charArrayClass_1;
  };
  PrimitiveClasses.prototype._get_byteArrayClass__2177249572_z0u1gc_k$ = function () {
    return this.byteArrayClass_1;
  };
  PrimitiveClasses.prototype._get_shortArrayClass__1957270326_wdb3g6_k$ = function () {
    return this.shortArrayClass_1;
  };
  PrimitiveClasses.prototype._get_intArrayClass__787137187_d0n2xv_k$ = function () {
    return this.intArrayClass_1;
  };
  PrimitiveClasses.prototype._get_longArrayClass__2852100912_nv1mts_k$ = function () {
    return this.longArrayClass_1;
  };
  PrimitiveClasses.prototype._get_floatArrayClass__2432403798_usx76y_k$ = function () {
    return this.floatArrayClass_1;
  };
  PrimitiveClasses.prototype._get_doubleArrayClass__2928832379_mld0g5_k$ = function () {
    return this.doubleArrayClass_1;
  };
  PrimitiveClasses.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = _get_functionClasses__573580451()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = _get_functionClasses__573580451();
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_anyClass__2722679391_q03l41_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_numberClass__2243734466_xx91dq_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_nothingClass__2888957184_n93ocg_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_booleanClass__1099338011_i6immz_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_byteClass__3017072385_l4tq0v_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_shortClass__2900162991_n2fhw1_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_intClass__1005394466_gml3c2_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_floatClass__141668239_2ccfwv_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_doubleClass__2234697290_y2mqie_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_arrayClass__2667531724_qwxlbo_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_stringClass__1269070474_kzkl1m_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_throwableClass__2200583411_ymxwy5_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_booleanArrayClass__3316760394_g6ed9y_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_charArrayClass__2352161302_w4p2p6_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_byteArrayClass__2177249572_z0u1gc_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_shortArrayClass__1957270326_wdb3g6_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_intArrayClass__787137187_d0n2xv_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_longArrayClass__2852100912_nv1mts_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_floatArrayClass__2432403798_usx76y_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_doubleArrayClass__2928832379_mld0g5_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_3110183218;
  function init_properties_primitives_kt_1669626638() {
    if (!properties_initialized_primitives_kt_3110183218) {
      properties_initialized_primitives_kt_3110183218 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = fillArrayVal(Array(0), null);
        break $l$block;
      }
      functionClasses = tmp$ret$0;
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = getKClassM(tmp$ret$1);
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = jClass;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = getKClass1(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._get_stringClass__1269070474_kzkl1m_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    }
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance()._get_stringClass__1269070474_kzkl1m_k$();
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance()._get_intClass__1005394466_gml3c2_k$();
          } else {
            {
              tmp_0 = PrimitiveClasses_getInstance()._get_doubleClass__2234697290_y2mqie_k$();
            }
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance()._get_booleanClass__1099338011_i6immz_k$();
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = e;
            break $l$block_0;
          }

          tmp = tmp_1.functionClass(tmp$ret$1.length);
          break;
        default:
          var tmp_2;
          if (isBooleanArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._get_booleanArrayClass__3316760394_g6ed9y_k$();
          } else {
            if (isCharArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._get_charArrayClass__2352161302_w4p2p6_k$();
            } else {
              if (isByteArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._get_byteArrayClass__2177249572_z0u1gc_k$();
              } else {
                if (isShortArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._get_shortArrayClass__1957270326_wdb3g6_k$();
                } else {
                  if (isIntArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._get_intArrayClass__787137187_d0n2xv_k$();
                  } else {
                    if (isLongArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._get_longArrayClass__2852100912_nv1mts_k$();
                    } else {
                      if (isFloatArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._get_floatArrayClass__2432403798_usx76y_k$();
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance()._get_doubleArrayClass__2928832379_mld0g5_k$();
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_2 = getKClass(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_2 = PrimitiveClasses_getInstance()._get_arrayClass__2667531724_qwxlbo_k$();
                            } else {
                              {
                                var constructor = Object.getPrototypeOf(e).constructor;
                                var tmp_3;
                                if (constructor === Object) {
                                  tmp_3 = PrimitiveClasses_getInstance()._get_anyClass__2722679391_q03l41_k$();
                                } else if (constructor === Error) {
                                  tmp_3 = PrimitiveClasses_getInstance()._get_throwableClass__2200583411_ymxwy5_k$();
                                } else {
                                  var jsClass = constructor;
                                  tmp_3 = getKClass1(jsClass);
                                }
                                tmp_2 = tmp_3;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_2;
          break;
      }
      var tmp1_unsafeCast_0 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_unsafeCast_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this.string_1 = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this.string_1;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.get_a7b70_k$ = function (index) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrElse_0 = this.string_1;
      var tmp;
      if (index >= 0 ? index <= _get_lastIndex__339712501_0(tmp0_getOrElse_0) : false) {
        tmp = charSequenceGet(tmp0_getOrElse_0, index);
      } else {
        throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this._get_length__2347802853_w7ahp7_k$() + '}');
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StringBuilder.prototype.subSequence_5fh70h_k$ = function (startIndex, endIndex) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.string_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  StringBuilder.prototype.append_t8oh9e_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this.string_1 = tmp0_this.string_1 + new Char(value);
    return this;
  };
  StringBuilder.prototype.append_oz4qxs_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this.string_1 = tmp0_this.string_1 + toString_1(value);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this.string_1;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function uppercaseChar(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = toString_0(_this__1828080292);
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this__1828080292 : charSequenceGet(uppercase, 0);
  }
  function isWhitespace(_this__1828080292) {
    return isWhitespaceImpl(_this__1828080292);
  }
  function toDouble(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this__1828080292;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = +tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      var tmp1_also_0 = tmp$ret$1;
      {
      }
      {
        if ((isNaN_0(tmp1_also_0) ? !isNaN_1(_this__1828080292) : false) ? true : tmp1_also_0 === 0.0 ? isBlank(_this__1828080292) : false) {
          numberFormatError(_this__1828080292);
        }
      }
      tmp$ret$2 = tmp1_also_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function isNaN_1(_this__1828080292) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this__1828080292;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    var tmp0_subject = tmp$ret$1;
    switch (tmp0_subject) {
      case 'nan':
      case '+nan':
      case '-nan':
        return true;
      default:
        return false;
    }
  }
  function Regex_init_$Init$(pattern, $this) {
    Regex.call($this, pattern, emptySet());
    return $this;
  }
  function Regex_init_$Create$(pattern) {
    return Regex_init_$Init$(pattern, Object.create(Regex.prototype));
  }
  function initStickyPattern($this) {
    var tmp0_elvis_lhs = $this.nativeStickyPattern_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = new RegExp($this.pattern_1, toFlags($this.options_1, 'yu'));
        {
        }
        {
          $this.nativeStickyPattern_1 = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.patternEscape_1 = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
    this.replacementEscape_1 = new RegExp('[\\\\$]', 'g');
    this.nativeReplacementEscape_1 = new RegExp('\\$', 'g');
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Regex$findAll$lambda(this$0, $input, $startIndex) {
    return function () {
      return this$0.find_9caqn1_k$($input, $startIndex);
    };
  }
  function Regex$findAll$lambda_0() {
    return function (match) {
      return match.next_20eer_k$();
    };
  }
  function Regex(pattern, options) {
    Companion_getInstance_5();
    this.pattern_1 = pattern;
    this.options_1 = toSet(options);
    this.nativePattern_1 = new RegExp(pattern, toFlags(options, 'gu'));
    this.nativeStickyPattern_1 = null;
    this.nativeMatchesEntirePattern_1 = null;
  }
  Regex.prototype.find_9caqn1_k$ = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$('Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }
    return findNext(this.nativePattern_1, toString_2(input), startIndex, this.nativePattern_1);
  };
  Regex.prototype.findAll_u4n4j0_k$ = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$('Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }
    var tmp = Regex$findAll$lambda(this, input, startIndex);
    return generateSequence(tmp, Regex$findAll$lambda_0());
  };
  Regex.prototype.findAll$default_qbzddh_k$ = function (input, startIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    return this.findAll_u4n4j0_k$(input, startIndex);
  };
  Regex.prototype.matchAt_qonb1g_k$ = function (input, index) {
    if (index < 0 ? true : index > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$('index out of bounds: ' + index + ', input length: ' + charSequenceLength(input));
    }
    return findNext(initStickyPattern(this), toString_2(input), index, this.nativePattern_1);
  };
  Regex.prototype.split_8rwwda_k$ = function (input, limit) {
    requireNonNegativeLimit(limit);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = this.findAll$default_qbzddh_k$(input, 0, 2, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = limit === 0 ? tmp0_let_0 : take(tmp0_let_0, limit - 1 | 0);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var matches = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    var result = tmp$ret$2;
    var lastStart = 0;
    var tmp0_iterator = matches.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var match = tmp0_iterator.next_20eer_k$();
      result.add_1j60pz_k$(toString_2(charSequenceSubSequence(input, lastStart, match._get_range__3568951860_c0913g_k$()._get_start__3614751663_b8zdqp_k$())));
      Unit_getInstance();
      lastStart = match._get_range__3568951860_c0913g_k$()._get_endInclusive__731268122_c3dm3e_k$() + 1 | 0;
    }
    result.add_1j60pz_k$(toString_2(charSequenceSubSequence(input, lastStart, charSequenceLength(input))));
    Unit_getInstance();
    return result;
  };
  Regex.prototype.toString = function () {
    return this.nativePattern_1.toString();
  };
  Regex.$metadata$ = {
    simpleName: 'Regex',
    kind: 'class',
    interfaces: []
  };
  function MatchGroup(value) {
    this.value_1 = value;
  }
  MatchGroup.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  MatchGroup.prototype.toString = function () {
    return 'MatchGroup(value=' + this.value_1 + ')';
  };
  MatchGroup.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  MatchGroup.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MatchGroup))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MatchGroup ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  MatchGroup.$metadata$ = {
    simpleName: 'MatchGroup',
    kind: 'class',
    interfaces: []
  };
  function toFlags(_this__1828080292, prepend) {
    return joinToString$default_0(_this__1828080292, '', prepend, null, 0, null, toFlags$lambda(), 28, null);
  }
  function findNext(_this__1828080292, input, from, nextPattern) {
    _this__1828080292.lastIndex = from;
    var match = _this__1828080292.exec(input);
    if (match == null)
      return null;
    var range = numberRangeToNumber(match.index, _this__1828080292.lastIndex - 1 | 0);
    return new findNext$1(range, match, nextPattern, input);
  }
  function toFlags$lambda() {
    return function (it) {
      return it.value_1;
    };
  }
  function findNext$o$groups$o$iterator$lambda(this$0) {
    return function (it) {
      return this$0.get_fkrdnv_k$(it);
    };
  }
  function advanceToNextCharacter($this, index) {
    if (index < _get_lastIndex__339712501_0($this.$input_1)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this.$input_1;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      var code1 = tmp$ret$1;
      if (55296 <= code1 ? code1 <= 56319 : false) {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = $this.$input_1;
            break $l$block_1;
          }
          var tmp1_unsafeCast_0 = tmp$ret$2.charCodeAt(index + 1 | 0);
          tmp$ret$3 = tmp1_unsafeCast_0;
          break $l$block_2;
        }
        var code2 = tmp$ret$3;
        if (56320 <= code2 ? code2 <= 57343 : false) {
          return index + 2 | 0;
        }
      }
    }
    return index + 1 | 0;
  }
  function findNext$1$groups$1($match) {
    this.$match_1 = $match;
    AbstractCollection.call(this);
  }
  findNext$1$groups$1.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.$match_1.length;
  };
  findNext$1$groups$1.prototype.iterator_jk1svi_k$ = function () {
    var tmp = asSequence(_get_indices__2241594442(this));
    return map(tmp, findNext$o$groups$o$iterator$lambda(this)).iterator_jk1svi_k$();
  };
  findNext$1$groups$1.prototype.get_fkrdnv_k$ = function (index) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this.$match_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0[index];
      break $l$block_0;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = new MatchGroup(tmp0_safe_receiver);
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  findNext$1$groups$1.$metadata$ = {
    kind: 'class',
    interfaces: [MatchGroupCollection]
  };
  function findNext$1($range, $match, $nextPattern, $input) {
    this.$range_1 = $range;
    this.$match_1 = $match;
    this.$nextPattern_1 = $nextPattern;
    this.$input_1 = $input;
    this.range_1 = $range;
    var tmp = this;
    tmp.groups_1 = new findNext$1$groups$1($match);
    this.groupValues__1 = null;
  }
  findNext$1.prototype._get_range__3568951860_c0913g_k$ = function () {
    return this.range_1;
  };
  findNext$1.prototype._get_groups__2578767799_sds409_k$ = function () {
    return this.groups_1;
  };
  findNext$1.prototype.next_20eer_k$ = function () {
    return findNext(this.$nextPattern_1, this.$input_1, this.$range_1.isEmpty_y1axqb_k$() ? advanceToNextCharacter(this, this.$range_1._get_start__3614751663_b8zdqp_k$()) : this.$range_1._get_endInclusive__731268122_c3dm3e_k$() + 1 | 0, this.$nextPattern_1);
  };
  findNext$1.$metadata$ = {
    kind: 'class',
    interfaces: [MatchResult]
  };
  function isBlank(_this__1828080292) {
    var tmp;
    if (charSequenceLength(_this__1828080292) === 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_2: {
        var tmp0_all_0 = _get_indices__2241594442_0(_this__1828080292);
        var tmp_0;
        if (isInterface(tmp0_all_0, Collection)) {
          tmp_0 = tmp0_all_0.isEmpty_y1axqb_k$();
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
        var inductionVariable = tmp0_all_0._get_first__3232921377_hkbbvj_k$();
        var last = tmp0_all_0._get_last__802328181_d9oodx_k$();
        if (inductionVariable <= last)
          do {
            var element_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = isWhitespace(charSequenceGet(_this__1828080292, element_2));
              break $l$block_0;
            }
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_2;
            } else {
            }
          }
           while (!(element_2 === last));
        tmp$ret$0 = true;
        break $l$block_2;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function startsWith(_this__1828080292, prefix, ignoreCase) {
    if (!ignoreCase) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this__1828080292;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.startsWith(prefix, 0);
        break $l$block_0;
      }
      return tmp$ret$1;
    } else
      return regionMatches(_this__1828080292, 0, prefix, 0, prefix.length, ignoreCase);
  }
  function startsWith$default(_this__1828080292, prefix, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return startsWith(_this__1828080292, prefix, ignoreCase);
  }
  function startsWith_0(_this__1828080292, prefix, startIndex, ignoreCase) {
    if (!ignoreCase) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this__1828080292;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.startsWith(prefix, startIndex);
        break $l$block_0;
      }
      return tmp$ret$1;
    } else
      return regionMatches(_this__1828080292, startIndex, prefix, 0, prefix.length, ignoreCase);
  }
  function startsWith$default_0(_this__1828080292, prefix, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return startsWith_0(_this__1828080292, prefix, startIndex, ignoreCase);
  }
  function regionMatches(_this__1828080292, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this__1828080292, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function _Char___init__impl__380027157(value) {
    return value;
  }
  function _get_value__3683422336($this) {
    return $this;
  }
  function _Char___init__impl__380027157_0(code) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl__26876597(code) & 65535;
      break $l$block;
    }
    var tmp = _Char___init__impl__380027157(tmp$ret$0);
    return tmp;
  }
  function Char__toInt_impl_2402388783(this_0) {
    return _get_value__3683422336(this_0);
  }
  function Char__equals_impl_2289177560(this_0, other) {
    if (!(other instanceof Char))
      return false;
    else {
    }
    return _get_value__3683422336(this_0) === _get_value__3683422336(other.value_1);
  }
  function Char__hashCode_impl_4253273724(this_0) {
    return _get_value__3683422336(this_0);
  }
  function toString_0(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = String.fromCharCode(_get_value__3683422336(this_0));
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.MIN_VALUE_1 = _Char___init__impl__380027157(0);
    this.MAX_VALUE_1 = _Char___init__impl__380027157(65535);
    this.MIN_HIGH_SURROGATE_1 = _Char___init__impl__380027157(55296);
    this.MAX_HIGH_SURROGATE_1 = _Char___init__impl__380027157(56319);
    this.MIN_LOW_SURROGATE_1 = _Char___init__impl__380027157(56320);
    this.MAX_LOW_SURROGATE_1 = _Char___init__impl__380027157(57343);
    this.MIN_SURROGATE_1 = _Char___init__impl__380027157(55296);
    this.MAX_SURROGATE_1 = _Char___init__impl__380027157(57343);
    this.SIZE_BYTES_1 = 2;
    this.SIZE_BITS_1 = 16;
  }
  Companion_6.prototype._get_MIN_VALUE__1378605517_f6clgy_k$ = function () {
    return this.MIN_VALUE_1;
  };
  Companion_6.prototype._get_MAX_VALUE__3201573499_zh3t30_k$ = function () {
    return this.MAX_VALUE_1;
  };
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Char(value) {
    Companion_getInstance_6();
    this.value_1 = value;
  }
  Char.prototype.equals = function (other) {
    return Char__equals_impl_2289177560(this.value_1, other);
  };
  Char.prototype.hashCode = function () {
    return Char__hashCode_impl_4253273724(this.value_1);
  };
  Char.prototype.toString = function () {
    return toString_0(this.value_1);
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map() {
  }
  Map.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map]
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_7();
    this.name_1 = name;
    this.ordinal_1 = ordinal;
  }
  Enum.prototype._get_ordinal__3363892928_fec5kw_k$ = function () {
    return this.ordinal_1;
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this.name_1;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_1(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_2(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new arrayIterator$1(array);
  }
  function arrayIterator$1($array) {
    this.$array_1 = $array;
    this.index_1 = 0;
  }
  arrayIterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return !(this.index_1 === this.$array_1.length);
  };
  arrayIterator$1.prototype.next_20eer_k$ = function () {
    var tmp;
    if (!(this.index_1 === this.$array_1.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.index_1;
      tmp0_this.index_1 = tmp1 + 1 | 0;
      tmp = this.$array_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this.index_1);
    }
    return tmp;
  };
  arrayIterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function _get_buf__856886398() {
    init_properties_bitUtils_kt_782416278();
    return buf;
  }
  var buf;
  function _get_bufFloat64__3281801540() {
    init_properties_bitUtils_kt_782416278();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function _get_bufInt32__721419088() {
    init_properties_bitUtils_kt_782416278();
    return bufInt32;
  }
  var bufInt32;
  function _get_lowIndex__162050477() {
    init_properties_bitUtils_kt_782416278();
    return lowIndex;
  }
  var lowIndex;
  function _get_highIndex__2347002881() {
    init_properties_bitUtils_kt_782416278();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    init_properties_bitUtils_kt_782416278();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    } else {
    }
    _get_bufFloat64__3281801540()[0] = obj;
    return imul(_get_bufInt32__721419088()[_get_highIndex__2347002881()], 31) + _get_bufInt32__721419088()[_get_lowIndex__162050477()] | 0;
  }
  var properties_initialized_bitUtils_kt_1092294842;
  function init_properties_bitUtils_kt_782416278() {
    if (!properties_initialized_bitUtils_kt_1092294842) {
      properties_initialized_bitUtils_kt_1092294842 = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = new Float64Array(_get_buf__856886398());
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      $l$block_2: {
        var tmp0_unsafeCast_0_0 = new Float32Array(_get_buf__856886398());
        var tmp$ret$0_0;
        $l$block_1: {
          tmp$ret$0_0 = tmp0_unsafeCast_0_0;
          break $l$block_1;
        }
        tmp$ret$1_0 = tmp$ret$0_0;
        break $l$block_2;
      }
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      $l$block_4: {
        var tmp0_unsafeCast_0_1 = new Int32Array(_get_buf__856886398());
        var tmp$ret$0_1;
        $l$block_3: {
          tmp$ret$0_1 = tmp0_unsafeCast_0_1;
          break $l$block_3;
        }
        tmp$ret$1_1 = tmp$ret$0_1;
        break $l$block_4;
      }
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      $l$block_6: {
        {
        }
        var tmp$ret$0_2;
        $l$block_5: {
          _get_bufFloat64__3281801540()[0] = -1.0;
          tmp$ret$0_2 = !(_get_bufInt32__721419088()[0] === 0) ? 1 : 0;
          break $l$block_5;
        }
        tmp$ret$1_2 = tmp$ret$0_2;
        break $l$block_6;
      }
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - _get_lowIndex__162050477() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = a;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        var tmp1_Char_0 = tmp$ret$1;
        var tmp_0;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0__get_code__0_1_3836959015 = Companion_getInstance_6()._get_MIN_VALUE__1378605517_f6clgy_k$();
          tmp$ret$2 = Char__toInt_impl_2402388783(tmp0__get_code__0_1_3836959015);
          break $l$block_1;
        }
        if (tmp1_Char_0 < tmp$ret$2) {
          tmp_0 = true;
        } else {
          {
            var tmp$ret$3;
            $l$block_2: {
              var tmp1__get_code__0_2_3326424839 = Companion_getInstance_6()._get_MAX_VALUE__3201573499_zh3t30_k$();
              tmp$ret$3 = Char__toInt_impl_2402388783(tmp1__get_code__0_2_3326424839);
              break $l$block_2;
            }
            tmp_0 = tmp1_Char_0 > tmp$ret$3;
          }
        }
        if (tmp_0) {
          throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp1_Char_0);
        } else {
        }
        tmp$ret$4 = numberToChar(tmp1_Char_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = a.get_a7b70_k$(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.length;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a._get_length__2347802853_w7ahp7_k$();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.substring(startIndex, endIndex);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a.subSequence_5fh70h_k$(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, arrayToString$lambda(), 24, null);
  }
  function arrayToString$lambda() {
    return function (it) {
      return toString_2(it);
    };
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toString_2(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = obj;
          break $l$block;
        }

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:
        tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = str;
          break $l$block;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 1;
            break $l$block;
          }
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('lateinit property ' + name + ' has not been initialized');
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = source.slice(0, newSize);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var result = tmp$ret$0;
    {
      if (source.$type$ !== undefined) {
        result.$type$ = source.$type$;
      }
    }
    var index = source.length;
    if (newSize > index) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = result;
        break $l$block_0;
      }
      tmp$ret$1.length = newSize;
      while (index < newSize) {
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        result[tmp0] = defaultValue;
      }
    }
    return result;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.MIN_VALUE_1 = new Long(0, -2147483648);
    this.MAX_VALUE_1 = new Long(-1, 2147483647);
    this.SIZE_BYTES_1 = 8;
    this.SIZE_BITS_1 = 64;
  }
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Long(low, high) {
    Companion_getInstance_8();
    Number_0.call(this);
    this.low_1 = low;
    this.high_1 = high;
  }
  Long.prototype._get_low__857179069_e6cblp_k$ = function () {
    return this.low_1;
  };
  Long.prototype._get_high__798860521_d7mcq1_k$ = function () {
    return this.high_1;
  };
  Long.prototype.plus_u6jwas_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.div_9s1fi3_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.unaryMinus_6uz0qp_k$ = function () {
    return this.inv_28kx_k$().plus_u6jwas_k$(new Long(1, 0));
  };
  Long.prototype.inv_28kx_k$ = function () {
    return new Long(~this.low_1, ~this.high_1);
  };
  Long.prototype.toInt_1tsl84_k$ = function () {
    return this.low_1;
  };
  Long.prototype.toDouble_ygsx0s_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_ygsx0s_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _get_ZERO__784837795() {
    init_properties_longjs_kt_2491794837();
    return ZERO;
  }
  var ZERO;
  function _get_ONE__856281867() {
    init_properties_longjs_kt_2491794837();
    return ONE;
  }
  var ONE;
  function _get_NEG_ONE__3857310458() {
    init_properties_longjs_kt_2491794837();
    return NEG_ONE;
  }
  var NEG_ONE;
  function _get_MAX_VALUE__3201573499() {
    init_properties_longjs_kt_2491794837();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function _get_MIN_VALUE__1378605517() {
    init_properties_longjs_kt_2491794837();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function _get_TWO_PWR_24___3968246811() {
    init_properties_longjs_kt_2491794837();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (equalsLong(_this__1828080292, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__1828080292);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__1828080292, other)) ? -1 : 1;
  }
  function add(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    var a48 = _this__1828080292._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var a32 = _this__1828080292._get_high__798860521_d7mcq1_k$() & 65535;
    var a16 = _this__1828080292._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var a00 = _this__1828080292._get_low__857179069_e6cblp_k$() & 65535;
    var b48 = other._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var b32 = other._get_high__798860521_d7mcq1_k$() & 65535;
    var b16 = other._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var b00 = other._get_low__857179069_e6cblp_k$() & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return add(_this__1828080292, other.unaryMinus_6uz0qp_k$());
  }
  function multiply(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (isZero(_this__1828080292)) {
      return _get_ZERO__784837795();
    } else if (isZero(other)) {
      return _get_ZERO__784837795();
    }
    if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
      return isOdd(other) ? _get_MIN_VALUE__1378605517() : _get_ZERO__784837795();
    } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
      return isOdd(_this__1828080292) ? _get_MIN_VALUE__1378605517() : _get_ZERO__784837795();
    }
    if (isNegative(_this__1828080292)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__1828080292), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__1828080292), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__1828080292, negate(other)));
    }
    if (lessThan(_this__1828080292, _get_TWO_PWR_24___3968246811()) ? lessThan(other, _get_TWO_PWR_24___3968246811()) : false) {
      return fromNumber(toNumber(_this__1828080292) * toNumber(other));
    }
    var a48 = _this__1828080292._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var a32 = _this__1828080292._get_high__798860521_d7mcq1_k$() & 65535;
    var a16 = _this__1828080292._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var a00 = _this__1828080292._get_low__857179069_e6cblp_k$() & 65535;
    var b48 = other._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var b32 = other._get_high__798860521_d7mcq1_k$() & 65535;
    var b16 = other._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var b00 = other._get_low__857179069_e6cblp_k$() & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__1828080292)) {
      return _get_ZERO__784837795();
    }
    if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
      if (equalsLong(other, _get_ONE__856281867()) ? true : equalsLong(other, _get_NEG_ONE__3857310458())) {
        return _get_MIN_VALUE__1378605517();
      } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
        return _get_ONE__856281867();
      } else {
        var halfThis = shiftRight(_this__1828080292, 1);
        var approx = shiftLeft(halfThis.div_9s1fi3_k$(other), 1);
        if (equalsLong(approx, _get_ZERO__784837795())) {
          return isNegative(other) ? _get_ONE__856281867() : _get_NEG_ONE__3857310458();
        } else {
          var rem = subtract(_this__1828080292, multiply(other, approx));
          return add(approx, rem.div_9s1fi3_k$(other));
        }
      }
    } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
      return _get_ZERO__784837795();
    }
    if (isNegative(_this__1828080292)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__1828080292).div_9s1fi3_k$(negate(other));
      } else {
        tmp = negate(negate(_this__1828080292).div_9s1fi3_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__1828080292.div_9s1fi3_k$(negate(other)));
    }
    var res = _get_ZERO__784837795();
    var rem_0 = _this__1828080292;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = _get_ONE__856281867();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__1828080292, numBits) {
    init_properties_longjs_kt_2491794837();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__1828080292;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__1828080292._get_low__857179069_e6cblp_k$() << numBits_0, _this__1828080292._get_high__798860521_d7mcq1_k$() << numBits_0 | (_this__1828080292._get_low__857179069_e6cblp_k$() >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__1828080292._get_low__857179069_e6cblp_k$() << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__1828080292, numBits) {
    init_properties_longjs_kt_2491794837();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__1828080292;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__1828080292._get_low__857179069_e6cblp_k$() >>> numBits_0 | 0 | _this__1828080292._get_high__798860521_d7mcq1_k$() << (32 - numBits_0 | 0), _this__1828080292._get_high__798860521_d7mcq1_k$() >> numBits_0);
      } else {
        return new Long(_this__1828080292._get_high__798860521_d7mcq1_k$() >> (numBits_0 - 32 | 0), _this__1828080292._get_high__798860521_d7mcq1_k$() >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() * 4.294967296E9 + getLowBitsUnsigned(_this__1828080292);
  }
  function equalsLong(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() === other._get_high__798860521_d7mcq1_k$() ? _this__1828080292._get_low__857179069_e6cblp_k$() === other._get_low__857179069_e6cblp_k$() : false;
  }
  function hashCode_0(l) {
    init_properties_longjs_kt_2491794837();
    return l._get_low__857179069_e6cblp_k$() ^ l._get_high__798860521_d7mcq1_k$();
  }
  function toStringImpl(_this__1828080292, radix) {
    init_properties_longjs_kt_2491794837();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__1828080292)) {
      return '0';
    }
    if (isNegative(_this__1828080292)) {
      if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
        var radixLong = fromInt(radix);
        var div = _this__1828080292.div_9s1fi3_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__1828080292).toInt_1tsl84_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__1828080292), radix);
      }
    }
    var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this__1828080292;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_9s1fi3_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_1tsl84_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    init_properties_longjs_kt_2491794837();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() < 0;
  }
  function isZero(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() === 0 ? _this__1828080292._get_low__857179069_e6cblp_k$() === 0 : false;
  }
  function isOdd(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return (_this__1828080292._get_low__857179069_e6cblp_k$() & 1) === 1;
  }
  function negate(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292.unaryMinus_6uz0qp_k$();
  }
  function lessThan(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) < 0;
  }
  function fromNumber(value) {
    init_properties_longjs_kt_2491794837();
    if (isNaN_0(value)) {
      return _get_ZERO__784837795();
    } else if (value <= -9.223372036854776E18) {
      return _get_MIN_VALUE__1378605517();
    } else if (value + 1 >= 9.223372036854776E18) {
      return _get_MAX_VALUE__3201573499();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) > 0;
  }
  function greaterThanOrEqual(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) >= 0;
  }
  function getLowBitsUnsigned(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_low__857179069_e6cblp_k$() >= 0 ? _this__1828080292._get_low__857179069_e6cblp_k$() : 4.294967296E9 + _this__1828080292._get_low__857179069_e6cblp_k$();
  }
  var properties_initialized_longjs_kt_320052665;
  function init_properties_longjs_kt_2491794837() {
    if (!properties_initialized_longjs_kt_320052665) {
      properties_initialized_longjs_kt_320052665 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_1tsl84_k$();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toShort$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toUShort_0 = numberToInt(a);
      tmp$ret$0 = _UShort___init__impl__3115094534(toShort(tmp0_toUShort_0));
      break $l$block;
    }
    return _Char___init__impl__380027157_0(tmp$ret$0);
  }
  function toShort$outlinedJsCode$(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }
      }
    }
    var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:
        return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js__1413122402(getKClass(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return jsInstanceOf(a, Uint16Array) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function asList(_this__1828080292) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this__1828080292;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return new ArrayList(tmp$ret$1);
  }
  function copyOf(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_2(message_1));
      }
    }
    return arrayCopyResize(_this__1828080292, newSize, null);
  }
  function fill(_this__1828080292, element, fromIndex, toIndex) {
    Companion_getInstance().checkRangeIndexes_5hjybp_k$(fromIndex, toIndex, _this__1828080292.length);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    tmp$ret$0.fill(element, fromIndex, toIndex);
  }
  function isWhitespaceImpl(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(_this__1828080292);
      break $l$block;
    }
    var ch = tmp$ret$0;
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function releaseIntercepted($this) {
    var intercepted = $this.intercepted__1;
    if (!(intercepted == null) ? !(intercepted === $this) : false) {
      ensureNotNull($this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance())).releaseInterceptedContinuation_4i98ok_k$(intercepted);
    }
    $this.intercepted__1 = CompletedContinuation_getInstance();
  }
  function CoroutineImpl(resultContinuation) {
    this.resultContinuation_1 = resultContinuation;
    this.state_1 = 0;
    this.exceptionState_1 = 0;
    this.result_1 = null;
    this.exception_1 = null;
    this.finallyPath_1 = null;
    var tmp = this;
    var tmp0_safe_receiver = this.resultContinuation_1;
    tmp._context_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__1558698818_ps0bpe_k$();
    this.intercepted__1 = null;
  }
  CoroutineImpl.prototype._set_state__1256591060_i39zdo_k$ = function (_set____804775014) {
    this.state_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  CoroutineImpl.prototype._set_exceptionState__118868437_8fc1n_k$ = function (_set____804775014) {
    this.exceptionState_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_exceptionState__1662596297_rhv7ih_k$ = function () {
    return this.exceptionState_1;
  };
  CoroutineImpl.prototype._set_result__3294305178_cat9z_k$ = function (_set____804775014) {
    this.result_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_result__3382885006_f31376_k$ = function () {
    return this.result_1;
  };
  CoroutineImpl.prototype._set_exception__4196179798_3fu58l_k$ = function (_set____804775014) {
    this.exception_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_exception__1672948706_ro13he_k$ = function () {
    return this.exception_1;
  };
  CoroutineImpl.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return ensureNotNull(this._context_1);
  };
  CoroutineImpl.prototype.resumeWith_7onugl_k$ = function (result) {
    var current = this;
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_Result___get_isFailure__impl__3103244073(result)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl__3597185688(result);
        tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    var currentResult = tmp$ret$0;
    var currentException = Result__exceptionOrNull_impl_1523290257(result);
    while (true) {
      var tmp$ret$6;
      $l$block_5: {
        var tmp0_with_0 = current;
        {
        }
        if (currentException == null) {
          tmp0_with_0.result_1 = currentResult;
        } else {
          tmp0_with_0.state_1 = tmp0_with_0.exceptionState_1;
          tmp0_with_0.exception_1 = currentException;
        }
        try {
          var outcome_2 = tmp0_with_0.doResume_5yljmg_k$();
          if (outcome_2 === _get_COROUTINE_SUSPENDED__2870145053())
            return Unit_getInstance();
          currentResult = outcome_2;
          currentException = null;
        } catch ($p) {
          currentResult = null;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = $p;
            break $l$block_0;
          }
          currentException = tmp$ret$1;
        }
        releaseIntercepted(tmp0_with_0);
        var completion_4 = ensureNotNull(tmp0_with_0.resultContinuation_1);
        var tmp_1;
        if (completion_4 instanceof CoroutineImpl) {
          current = completion_4;
          tmp_1 = Unit_getInstance();
        } else {
          {
            if (!(currentException == null)) {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_failure_0_1_6 = Companion_getInstance_2();
                  tmp$ret$2 = _Result___init__impl__2241242780(createFailure(tmp0_resumeWithException_0_5));
                  break $l$block_1;
                }
                tmp$ret$3 = completion_4.resumeWith_s3a3yh_k$(tmp$ret$2);
                break $l$block_2;
              }
            } else {
              var tmp$ret$5;
              $l$block_4: {
                var tmp1_resume_0_7 = currentResult;
                var tmp$ret$4;
                $l$block_3: {
                  var tmp0_success_0_1_8 = Companion_getInstance_2();
                  tmp$ret$4 = _Result___init__impl__2241242780(tmp1_resume_0_7);
                  break $l$block_3;
                }
                tmp$ret$5 = completion_4.resumeWith_s3a3yh_k$(tmp$ret$4);
                break $l$block_4;
              }
            }
            return Unit_getInstance();
          }
        }
        tmp$ret$6 = tmp_1;
        break $l$block_5;
      }
    }
  };
  CoroutineImpl.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_7onugl_k$(result);
  };
  CoroutineImpl.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    throw IllegalStateException_init_$Create$('This continuation is already complete');
  };
  CompletedContinuation.prototype.resumeWith_7onugl_k$ = function (result) {
    {
      throw IllegalStateException_init_$Create$('This continuation is already complete');
    }
  };
  CompletedContinuation.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_7onugl_k$(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function createCoroutineUnintercepted(_this__1828080292, receiver, completion) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_2832250971_0(completion, _this__1828080292, receiver);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function invokeSuspendSuperTypeWithReceiver(_this__1828080292, receiver, completion) {
    throw new NotImplementedError('It is intrinsic method');
  }
  function _no_name_provided__1_2832250971_0($completion, $this_createCoroutineUnintercepted, $receiver) {
    this.$completion_1 = $completion;
    this.$this_createCoroutineUnintercepted_1 = $this_createCoroutineUnintercepted;
    this.$receiver_1 = $receiver;
    CoroutineImpl.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__1_2832250971_0.prototype.doResume_2_owzjjp_k$ = function () {
    if (this._get_exception__1672948706_ro13he_k$() != null)
      throw this._get_exception__1672948706_ro13he_k$();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this.$this_createCoroutineUnintercepted_1;
        break $l$block;
      }
      var a_22 = tmp$ret$0;
      tmp$ret$1 = typeof a_22 === 'function' ? a_22(this.$receiver_1, this.$completion_1) : this.$this_createCoroutineUnintercepted_1.invoke_5zdxxo_k$(this.$receiver_1, this.$completion_1);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  _no_name_provided__1_2832250971_0.prototype.doResume_5yljmg_k$ = function () {
    return this.doResume_2_owzjjp_k$();
  };
  _no_name_provided__1_2832250971_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message) {
    var tmp = RuntimeException_init_$Init$_0(message, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NumberFormatException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$(message) {
    var tmp = NumberFormatException_init_$Init$(message, Object.create(NumberFormatException.prototype));
    captureStack(tmp, NumberFormatException_init_$Create$);
    return tmp;
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException);
  }
  NumberFormatException.$metadata$ = {
    simpleName: 'NumberFormatException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: 'UninitializedPropertyAccessException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack);
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function SuspendFunction1() {
  }
  SuspendFunction1.$metadata$ = {
    simpleName: 'SuspendFunction1',
    kind: 'interface',
    interfaces: []
  };
  //region block: post-declaration
  InternalHashCodeMap.prototype.createJsMap_8hfwp5_k$ = createJsMap;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.getKClassFromExpression = getKClassFromExpression;
  _.$crossModule$.getKClass = getKClass;
  _.$crossModule$.joinToString$default = joinToString$default_0;
  _.$crossModule$.startsWith$default = startsWith$default;
  _.$crossModule$.trimMargin$default = trimMargin$default;
  _.$crossModule$.ArrayList_init_$Create$ = ArrayList_init_$Create$_0;
  _.$crossModule$.ArrayList_init_$Create$_1 = ArrayList_init_$Create$;
  _.$crossModule$.LinkedHashMap_init_$Create$ = LinkedHashMap_init_$Create$;
  _.$crossModule$.Regex_init_$Create$ = Regex_init_$Create$;
  _.$crossModule$.Exception_init_$Init$ = Exception_init_$Init$_0;
  _.$crossModule$.IllegalArgumentException_init_$Create$ = IllegalArgumentException_init_$Create$;
  _.$crossModule$.RuntimeException_init_$Create$ = RuntimeException_init_$Create$;
  _.$crossModule$.Unit_getInstance = Unit_getInstance;
  _.$crossModule$.Collection = Collection;
  _.$crossModule$.addAll = addAll;
  _.$crossModule$.checkIndexOverflow = checkIndexOverflow;
  _.$crossModule$.chunked = chunked;
  _.$crossModule$.collectionSizeOrDefault = collectionSizeOrDefault;
  _.$crossModule$.drop = drop;
  _.$crossModule$.emptyList = emptyList;
  _.$crossModule$._get_lastIndex__339712501 = _get_lastIndex__339712501;
  _.$crossModule$.last = last;
  _.$crossModule$.listOf = listOf;
  _.$crossModule$.mapOf = mapOf;
  _.$crossModule$.plus = plus;
  _.$crossModule$.zip = zip;
  _.$crossModule$.captureStack = captureStack;
  _.$crossModule$.charSequenceLength = charSequenceLength;
  _.$crossModule$.equals = equals_0;
  _.$crossModule$.getNumberHashCode = getNumberHashCode;
  _.$crossModule$.getStringHashCode = getStringHashCode;
  _.$crossModule$.hashCode = hashCode;
  _.$crossModule$.isInterface = isInterface;
  _.$crossModule$.toString = toString_2;
  _.$crossModule$.drop_1 = drop_0;
  _.$crossModule$.toDouble = toDouble;
  _.$crossModule$.Enum = Enum;
  _.$crossModule$.Exception = Exception;
  _.$crossModule$.Pair = Pair;
  _.$crossModule$.THROW_CCE = THROW_CCE;
  _.$crossModule$.Triple = Triple;
  _.$crossModule$.ensureNotNull = ensureNotNull;
  _.$crossModule$.noWhenBranchMatchedException = noWhenBranchMatchedException;
  _.$crossModule$.throwUninitializedPropertyAccessException = throwUninitializedPropertyAccessException;
  _.$crossModule$.to = to;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_kotlin.js.map